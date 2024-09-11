import clsx from 'clsx';
import styles from './Cart.module.scss';

import { Helmet } from 'react-helmet';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//---------------MY COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/index.jsx';

//---------------PRIME REACT
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';

import "primereact/resources/themes/lara-light-cyan/theme.css";

//---------------ANOTHER COMPONENTS
import { carts, getCart } from '../../utils/HelperCart';
//________API SERVICE
import { handleRemovefromCart, handleUpdateCart } from './../../service/CartService.js'

import { toMoney } from './../../utils/StringUtil'

//--------------------------

function MiniProduct({ info, sku }) {
    return <>
        <div data-id={sku} className={clsx(styles.MiniProduct)}>
            <img src={info?.images?.[0]?.['imageURL']} alt="" />
            <div>
                <div>
                    <h5>{info?.productName}</h5>
                    <span>SKU: {sku}</span> <br />
                </div>

            </div>
        </div>
    </>
}

function Cart() {
    const [loading, setLoading] = useState(false);
    const [statusCode, setStatusCode] = useState(400);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [_totalPrice, setTotalPrice] = useState(0);
    const [_quantity, setQuantity] = useState(0);

    const toast = useRef(null);

    const showError = (content) => {
        toast.current.show({ severity: 'error', summary: 'Cảnh báo', detail: content });
    };
    const showSuccess = (content) => {
        toast.current.show({ severity: 'success', summary: 'Chúc mừng', detail: content });
    };
    const imageBodyTemplate = (rowData) => {
        return <img src={`${rowData?.info?.images?.[0]?.['imageURL']}`} className="cart-product-image" />;
    }
    const calcPrice = async (list) => {

    }
    const updateHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const _sku = e.target?.['id'];
        const _quan = e.target?.['value'];
        
        if (!localStorage.getItem('username')){
            alert('Chưa đăng nhập');
            window.location.href = '/login';
            return;
        }

        await handleUpdateCart(localStorage.getItem('username'), _sku, _quan).then(
            (res) => {
                if (res?.status == 200) {
                    getCart().then(() => {
                        setLoading(false);
                    });
                }
                // setLoading(false);
            }
        );
    }

    const removeHandler = async (e) => {
        e.preventDefault();
        const sku = e.target?.dataset?.['id'];
        setLoading(true);
        
        const checkConfirm = window.confirm("Bạn muốn xóa chứ?");
        
        if (!checkConfirm) {
            setLoading(false);
            return;
        }

        if (!localStorage.getItem('username')){
            alert('Chưa đăng nhập');
            window.location.href = '/login';
        }
        else {
            await handleRemovefromCart(localStorage.getItem('username'), sku).then(
                (res) => {
                    if (res?.status == 200) {
                        setLoading(false);
                        showSuccess("Đã xóa thành công!");
                        window.location.reload();
                    }
                }
            )

        }
    }

    useEffect(() => {
        let res = 0;
        const list = selectedProducts;
        if (!list) return;
        for (let i of list) res += i?.info?.['productPrice'] * i?.quantity;

        setTotalPrice(res);
    }, [selectedProducts])

    useEffect(() => {
        getCart().then(() => { setStatusCode(200); console.log(carts.current?.['products']) });
    }, [])


    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Đăng nhập</title>

        </Helmet>
        <Header onMenu={true} />
        <main>
            {loading ? <Loading></Loading> : null}
            <Toast ref={toast} />

            <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
            <div className={clsx('clearHeader')}></div>

            <div className={clsx(styles.Cart)}>
                <div className={clsx(styles.Container)}>
                    <div className={clsx(styles.CartBox)}>
                        <div className={clsx(styles.TableBox)}>
                            {
                                statusCode === 200 ?
                                    <DataTable selection={selectedProducts} columnResizeMode="fit" className={clsx(styles.Table)}
                                        value={carts.current?.['products']} size='small' stripedRows tableStyle={{ minWidth: '2rem' }}
                                        paginator rows={15} onSelectionChange={function (e) {
                                            setSelectedProducts(e.value);
                                        }}
                                    >
                                        <Column align={'center'} selectionMode="multiple" style={{ width: '5%' }} />
                                        {/* <Column align={'center'} body={imageBodyTemplate} header="" style={{ width: '10%' }}></Column> */}
                                        {/* <Column field="sku" header="SKU" style={{ width: '10%' }}></Column> */}
                                        <Column body={(rowData) => { return <MiniProduct info={rowData?.info} sku={rowData?.sku} /> }} header="Sản phẩm" style={{ width: '30%' }}></Column>
                                        <Column body={(rowData) => { return toMoney(String(rowData?.info?.productPrice)) }} header="Đơn giá" style={{ width: '5%' }}></Column>
                                        <Column align={'center'}
                                            body={(rowData) => {
                                                return <>
                                                    <div className={clsx(styles.AdjustQuantity)}> 
                                                        <InputNumber min={1} max={rowData?.info?.totalQuantity} name={rowData?.sku}
                                                        value={rowData?.quantity} onValueChange={updateHandler} showButtons mode="decimal" id={rowData?.sku} />
                                                        <div>
                                                            <a data-id={rowData?.sku} onClick={removeHandler}>Xóa</a>
                                                        </div>
                                                    </div>
                                                </>
                                            }}
                                            header="Số lượng" style={{ width: '1%' }}>
                                        </Column>
                                        <Column align={'right'}
                                        body={(rowData) => { return toMoney(String(rowData?.info?.['productPrice'] * rowData?.quantity)) }} header="Thành tiền" style={{ width: '5%' }}></Column>
                                    </DataTable>
                                    : <div className={clsx('is-free')}>
                                        <Loading></Loading>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className={clsx(styles.PaymentBox)}>
                        <h3>Thanh toán</h3>
                        <div className={clsx('is-flex', 'is-flex-row')}>
                            <h4>Thành tiền</h4>
                            <h5>{toMoney(String(_totalPrice))}</h5>
                        </div>
                        <button className={clsx(styles.PaymentBtn)}>
                            Thanh toán
                        </button>

                    </div>

                </div>
            </div>
        </main>


        <Footer />
    </>

}

export default Cart;