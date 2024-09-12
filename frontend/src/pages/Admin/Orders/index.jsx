import clsx from 'clsx';
import styles from './Orders.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

import Breadcrumb from './../Components/Breadcrumb';
//---------------PRIME REACT
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { TabMenu } from 'primereact/tabmenu';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';

//________API SERVICE

import {
    handleGetUserOrders,
    handleGetAllOrders,
    markOrderAsPaid,
    markOrderAsDelivered,
} from '../../../service/OrderService.js'

import { toMoney } from './../../../utils/StringUtil.js'

function MiniProduct({ info, sku }) {
    return <>
        <div data-id={sku} className={clsx(styles.MiniProduct)}>
            <div>
                <div>
                    <h5>{info?.products?.productName}</h5>
                    <span>SKU: {sku}</span> <br />
                </div>

            </div>
        </div>
    </>
}
function Orders() {

    const [updateTab] = useOutletContext();
    useEffect(() => {
        updateTab('orderBox');
    }, []);

    const items = [
        { label: 'Tất cả', id: 'all' },
        { label: 'Chờ thanh toán', id: 'paying' },
        { label: 'Chờ nhận hàng', id: 'shipping' },
        { label: 'Hoàn thành', id: 'done' }
    ];

    const menuModel = useRef([]);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(0);
    const [selectedOrders, setSelectedOrders] = useState(null);
    const cm = useRef(null);

    const username = localStorage.getItem("username")

    const orderlist = useRef([])

    const markPaid = async (orderId) => {
        console.log(orderId)
        await markOrderAsPaid(orderId).then((res) => {
            
        })
    }
    const markShipped = async (orderId) => {
        console.log(orderId)
        await markOrderAsDelivered(orderId).then((res) => {
            
        })
    }

    useEffect(() => {
        setLoading(true);
        // orderlist.current = [];
        const getData = async () => {
            await handleGetAllOrders({ status: items[status].id }).then((res) => {
                // console.log(res);
                orderlist.current = res?.data?.data;
                setLoading(false);
            })
        }

        if (status === 1) {
            console.log('catch')
            menuModel.current = [
                { label: 'Đã thanh toán', command: (e) => {markPaid(selectedOrders?.OrderID); console.log(selectedOrders)} },
            ]
        }
        else if (status === 2) {
            menuModel.current = [
                { label: 'Đã giao hàng', command: () => { markShipped(selectedOrders?.OrderID)} },
            ]
        }
        else {
            menuModel.current = [];
        }

        getData();

    }, [status])
    return (
        <>
            <h1>Đơn hàng</h1>
            <Breadcrumb />
            <div className={clsx(styles.OrderBox)}>
                <div>
                    <TabMenu model={items} activeIndex={status} onTabChange={(e) => { setStatus(e?.index); }} />

                </div>
                <div className={clsx(styles.TableContainer)}>
                    <ContextMenu model={menuModel.current} ref={cm} />

                    {

                        !loading
                            ? <DataTable selectionMode='single' selection={selectedOrders} columnResizeMode="fit" className={clsx(styles.Table)}
                                value={orderlist.current} size='small' stripedRows tableStyle={{ minWidth: '2rem' }} paginator
                                rows={5} onSelectionChange={function (e) {
                                    setSelectedOrders(e.value);
                                }}
                                onContextMenu={(e) => cm.current.show(e.originalEvent)}
                                contextMenuSelection={selectedOrders} onContextMenuSelectionChange={(e) => setSelectedOrders(e.value)}
                            >
                                {/* <Column align={'center'} selectionMode="single" style={{ width: '5%' }} /> */}

                                {/* <Column align={'center'} body={imageBodyTemplate} header="" style={{ width: '10%' }}></Column> */}
                                <Column field="OrderID" header="ORDER ID" style={{ width: '15%' }}></Column>
                                <Column align={'left'} body={(rowData) => { return toMoney(String(rowData?.['amount'])) }} header="Thành tiền" style={{ width: '5%' }}></Column>
                                <Column align={'left'} body={(rowData) => { return toMoney(String(rowData?.['shipfee'])) }} header="Phí ship" style={{ width: '5%' }}></Column>
                                <Column align={'left'} body={(rowData) => { return toMoney(String(rowData?.['shipfee'] + rowData?.['amount'])) }} header="Tổng cộng" style={{ width: '5%' }}></Column>
                                <Column field="status" header="Trạng thái" style={{ width: '10%' }}></Column>
                            </DataTable>
                            : null
                    }
                </div>

                <div className={clsx(styles.CartBox)} >
                    <h3>Thông tin đơn hàng</h3>
                    {
                        selectedOrders ?
                            <div className={clsx('is-flex', 'is-flex-space-between')}>
                                <div>
                                    <h5 style={{ fontWeight: 300 }}><strong>Mã đơn hàng: </strong> {selectedOrders?.['OrderID']}</h5>
                                    <h5 style={{ fontWeight: 300 }}><strong>Trạng thái: </strong> {selectedOrders?.['status']}</h5>
                                    <h5 style={{ fontWeight: 300 }}><strong>Ghi chú: </strong> {selectedOrders?.['notes']}</h5>

                                </div>
                                <div>
                                    <h5 style={{ fontWeight: 300 }}><strong>Thành tiền: </strong> {toMoney(String(selectedOrders?.['amount']))}</h5>
                                    <h5 style={{ fontWeight: 300 }}><strong>Phí ship: </strong>   {toMoney(String(selectedOrders?.['shipfee']))}</h5>
                                    <h5 style={{ fontWeight: 500, color: 'tomato' }}><strong>Tổng tiền: </strong>   {toMoney(String(selectedOrders?.['shipfee'] + selectedOrders?.['amount']))}</h5>

                                </div>
                            </div>
                            : null
                    }
                    <div className={clsx(styles.TableBox)}>
                        {
                            <DataTable columnResizeMode="fit" className={clsx(styles.Table)}
                                value={selectedOrders?.['items']} size='small' stripedRows tableStyle={{ minWidth: '2rem' }}
                                rows={100}
                            >
                                {/* <Column align={'center'} body={imageBodyTemplate} header="" style={{ width: '10%' }}></Column> */}
                                {/* <Column field="sku" header="SKU" style={{ width: '10%' }}></Column> */}
                                <Column body={(rowData) => { return <MiniProduct info={rowData} sku={rowData?.sku} /> }} header="Sản phẩm" style={{ width: '30%' }}></Column>
                                <Column body={(rowData) => { return toMoney(String(rowData?.['price'])) }} header="Đơn giá" style={{ width: '5%' }}></Column>
                                <Column align={'center'} field="quantity" header="Số lượng" style={{ width: '5%' }}></Column>

                                <Column align={'right'}
                                    body={(rowData) => { return toMoney(String(rowData?.['price'] * rowData?.['quantity'])) }} header="Thành tiền" style={{ width: '5%' }}></Column>
                            </DataTable>
                        }
                    </div>
                </div>

            </div>

        </>
    );
}



export default Orders;