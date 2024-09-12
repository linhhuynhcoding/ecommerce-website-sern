import clsx from 'clsx';
import styles from './Order.module.scss';

import { Helmet } from 'react-helmet';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

//---------------MY COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/index.jsx';
import Address from '../Profile/Address.jsx';

//---------------PRIME REACT
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';

import "primereact/resources/themes/lara-light-cyan/theme.css";

//---------------ANOTHER COMPONENTS
import { carts, getCart, preOrderList, updatepreOrderList } from '../../utils/HelperCart';
//________API SERVICE
import { handleRemovefromCart, handleUpdateCart } from './../../service/CartService.js'
import { handleCreateOrder } from './../../service/OrderService.js'

import {
    handleGetAddressUser,
    handleUpdateAddressUser,
} from '../../service/UserService.js'

import { toMoney } from './../../utils/StringUtil'
//--------------------------

function MiniProduct({ info, sku }) {
    return <>
        <div data-id={sku} className={clsx(styles.MiniProduct)}>
            <img src={info?.['image']} alt="" />

            <div>
                <div>
                    <h5>{info?.['productName']}</h5>
                    <span>SKU: {sku}</span> <br />
                </div>

            </div>
        </div>
    </>
}

function Order() {
    const [loading, setLoading] = useState(false);
    const [statusCode, setStatusCode] = useState(200);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [_totalPrice, setTotalPrice] = useState(0);
    const [_quantity, setQuantity] = useState(0);

    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [detail, setDetail] = useState("");

    const [notes, setNotes] = useState("");

    const { state } = useLocation();
    const { preList } = state;

    const username = localStorage.getItem("username")

    const toast = useRef(null);

    const showError = (content) => {
        toast.current.show({ severity: 'error', summary: 'Cảnh báo', detail: content });
    };
    const showSuccess = (content) => {
        toast.current.show({ severity: 'success', summary: 'Chúc mừng', detail: content });
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!city || !district || !ward | !detail) {
            alert("Điền đầy đủ thông tin!");
            setLoading(false);
            return;
        }

        await handleUpdateAddressUser(username, city, district, ward, detail).then(async (res) => {
            if (res?.status === 200) {
                const products = await preList.current?.['products'].map((p) => {
                    return {
                        sku: p?.sku,
                        price: p?.unitprice,
                        quantity: p?.quantity
                    }
                })
                await handleCreateOrder(username, 30000, preList.current?.['amount'], notes, products).then((res) => {
                    console.log(res);             
                    
                    window.location.href = "/profile";
                    
                }).catch(e => {
                    showError("Lỗi đặt hàng");
                    window.location.href = "/home";
                })
            }
            else {
                setLoading(false);
                showError("Lỗi địa chỉ!")
            }
        })
    }

    useEffect(() => {
        async function getData() {
            await handleGetAddressUser(username).then((res) => {
                if (res?.status === 200) {
                    setCity(res?.data?.data?.city_province ?? "")
                    setDistrict(res?.data?.data?.district ?? "")
                    setWard(res?.data?.data?.ward_communce ?? "")
                    setDetail(res?.data?.data?.addressDetail ?? "")
                }
            })
        }

        getData();
    }, [])

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Đặt hàng</title>

        </Helmet>
        <Header onMenu={true} />
        <main>
            {loading ? <Loading></Loading> : null}
            <Toast ref={toast} />

            <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
            <div className={clsx('clearHeader')}></div>

            <div className={clsx(styles.Order)}>
                <div className={clsx(styles.Container)}>
                    <div className={clsx(styles.DetailBox)}>
                        <div className={clsx(styles.CartBox)} >
                            <div className={clsx(styles.AddressBox)}>
                                <h3>Địa chỉ giao hàng </h3>
                                <form className={clsx(styles.FormBoxAddress)}>

                                    <fieldset className={clsx(styles.FormField)}>
                                        <label htmlFor="">Tỉnh thành</label>
                                        <InputText required
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />


                                    </fieldset>

                                    <fieldset className={clsx(styles.FormField)}>
                                        <label htmlFor="">Quận/ Huyện</label>
                                        <InputText required
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)}
                                        />
                                    </fieldset>

                                    <fieldset className={clsx(styles.FormField)}>
                                        <label htmlFor="">Phường/ Xã</label>
                                        <InputText required
                                            value={ward}
                                            onChange={(e) => setWard(e.target.value)}
                                        />
                                    </fieldset>

                                    <fieldset className={clsx(styles.FormField)}>
                                        <label htmlFor="">Địa chỉ cụ thể </label>
                                        <InputText required
                                            value={detail}
                                            onChange={(e) => setDetail(e.target.value)}
                                        />
                                    </fieldset>

                                </form>
                            </div>
                        </div>

                        <div className={clsx(styles.CartBox)} >
                            <h3>Ghi chú đơn hàng</h3>
                            <InputText
                                required
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />

                        </div>
                        <div className={clsx(styles.CartBox)} >
                            <div className={clsx(styles.Payment)}>
                                <h3>Phương thức thanh toán</h3>
                                <Checkbox value="Thanh toán khi nhận hàng" checked />
                                <label>Thanh toán khi nhận hàng</label>

                            </div>
                        </div>

                        <div className={clsx(styles.CartBox)} >
                            <h3>Thông tin đơn hàng</h3>

                            <div className={clsx(styles.TableBox)}>
                                {
                                    statusCode === 200 ?
                                        <DataTable selection={selectedProducts} columnResizeMode="fit" className={clsx(styles.Table)}
                                            value={preList.current['products']} size='small' stripedRows tableStyle={{ minWidth: '2rem' }}
                                            rows={100} onSelectionChange={function (e) {
                                                setSelectedProducts(e.value);
                                            }}
                                        >
                                            {/* <Column align={'center'} body={imageBodyTemplate} header="" style={{ width: '10%' }}></Column> */}
                                            {/* <Column field="sku" header="SKU" style={{ width: '10%' }}></Column> */}
                                            <Column body={(rowData) => { return <MiniProduct info={rowData} sku={rowData?.sku} /> }} header="Sản phẩm" style={{ width: '30%' }}></Column>
                                            <Column body={(rowData) => { return toMoney(String(rowData?.['unitprice'])) }} header="Đơn giá" style={{ width: '5%' }}></Column>
                                            <Column field="quantity" header="Số lượng" style={{ width: '10%' }}></Column>

                                            <Column align={'center'}
                                                body={(rowData) => { return toMoney(String(rowData?.['price'])) }} header="Thành tiền" style={{ width: '5%' }}></Column>
                                        </DataTable>
                                        : <div className={clsx('is-free')}>
                                            <Loading></Loading>
                                        </div>
                                }
                            </div>
                        </div>

                    </div>
                    <div className={clsx(styles.PaymentBox)}>
                        <h4>Thanh toán</h4>
                        <div className={clsx('is-flex', 'is-flex-row')}>
                            <h5 style={{ fontWeight: 400 }}>Thành tiền</h5>
                            <h5>{toMoney(String(preList.current?.['amount']))}</h5>
                        </div>
                        <div className={clsx('is-flex', 'is-flex-row')}>
                            <h5 style={{ fontWeight: 400 }}>Phí giao hàng</h5>
                            <h5>{toMoney(String(preList.current?.['ship']))}</h5>
                        </div>
                        <div className={clsx('is-flex', 'is-flex-row', 'is-flex-end')}>
                            <h2 style={{ fontWeight: 700 }}>Tổng cộng</h2>
                            <h3 style={{ color: 'red', fontWeight: 700 }}>{toMoney(String(preList.current?.['ship'] + preList.current?.['amount']))}</h3>
                        </div>

                        <button onClick={handlePurchase} style={{ opacity: 0.9 }} className={clsx(styles.PaymentBtn)}>
                            Thanh toán
                        </button>

                    </div>

                </div>
            </div>
        </main>


        <Footer />
    </>

}

export default Order;