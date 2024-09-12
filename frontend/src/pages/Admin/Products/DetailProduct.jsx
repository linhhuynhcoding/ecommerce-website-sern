import clsx from 'clsx';
import styles from './products.module.scss'

//---------PRIMEREACT
import { Dialog } from 'primereact/dialog';
import { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

//---------API SERVICE
import { handleUpdateProduct } from './../../../service/ProductService';


const categories = [
    { code: 'sanphamapple', name: "Sản phẩm Apple" },
    { code: 'laptop', name: "Laptop" },
    { code: 'pc', name: "Máy tính để bàn" },
    { code: 'monitor', name: "Màn hình máy tính" },
    { code: 'vga', name: "VGA" },
    { code: 'case', name: "Case" },
    { code: 'disk', name: "Ổ cứng" },
    { code: 'cpu', name: "CPU" },
    { code: 'ram', name: "RAM" },
    { code: 'cooler', name: "Tản nhiệt" },
    { code: 'mainboard', name: "Mainboard" },
    { code: 'psu', name: "PSU" },
    { code: 'mouse', name: "Chuột máy tính" },
    { code: 'keyboard', name: "Bàn phím" },
    { code: 'gamingchair', name: "Ghế Gaming" },
    { code: 'linhkien', name: "Linh kiện máy tính" },
    { code: 'phukien', name: "Phụ kiện máy tính" },
]
const brands = [
    { code: 'apple', name: "APPLE" },
    { code: 'mophie', name: "Mophie" },
    { code: 'asus', name: "ASUS" },
    { code: 'acer', name: "ACER" },
    { code: 'hp', name: "HP" },
    { code: 'lenovo', name: "Lenovo" },
    { code: 'msi', name: "MSI" },
    { code: 'phong-vu', name: "Phong Vũ" },
    { code: 'dell', name: "Dell" },
    { code: 'viewsonic', name: "VIEWSONIC" },
    { code: 'philips', name: "PHILIPS" },
    { code: 'samsung', name: "SAMSUNG" },
    { code: 'gigabyte', name: "GIGABYTE" },
    { code: 'cooler-master', name: "Cooler Master" },
    { code: 'golden-field', name: "GOLDEN FIELD" },
    { code: 'corsair', name: "CORSAIR" },
    { code: 'xigmatek', name: "XIGMATEK" },
    { code: 'khac', name: "Khác" },
    { code: 'deep-cool', name: "DEEPCOOL" },
    { code: 'adata', name: "ADATA" },
    { code: 'kingston', name: "KINGSTON" },
    { code: 'wd', name: "WD" },
    { code: 'sandisk', name: "SANDISK" },
    { code: 'seagate', name: "SEAGATE" },
    { code: 'intel', name: "INTEL" },
    { code: 'team', name: "TEAM" },
    { code: 'lexar', name: "Lexar" },
    { code: 'idcooling', name: "ID-COOLING" },
    { code: 'segotep', name: "SEGOTEP" },
    { code: 'mik', name: "MIK" },
    { code: 'logitech', name: "LOGITECH" },
    { code: 'newmen', name: "NEWMEN" },
    { code: 'razer', name: "RAZER" },
    { code: 'microsoft', name: "MICROSOFT" },
    { code: 'dareu', name: "DAREU" },
    { code: 'r8', name: "R8" },
    { code: 'fuhlen', name: "Fuhlen" },
    { code: 'akracing', name: "AKRacing" },
    { code: 'edra', name: "E-Dra" },
]


function DetailProduct({ data, setVisible }) {
    const [brand, setbrand] = useState(data?.brandCode);
    const [name, setname] = useState(data?.productName);
    const [price, setprice] = useState(data?.productPrice);
    const [quantity, setquantity] = useState(data?.quantity);
    const [cate, setcate] = useState(data?.categoryID);
    const [warranty, setwarranty] = useState(data?.warranty);

    console.log(data)

    const handleUpdate = async (e) => {
        e.preventDefault();

        console.log(data?.['sku'],
        name,
        price,
        cate?.code,
        warranty,
        quantity,
        brand?.code,)
        // return;

        await handleUpdateProduct(
            data?.['sku'],
            name,
            Number(price),
            cate?.code,
            Number(warranty),
            Number(quantity),
            brand?.code,
        ).then((res) => {
            if (res?.status == 200) {
                alert("Thành công!")
            }
            else {
                alert("Thất bại!")

            }
        }).catch()
    }

    useEffect(() => {
    }, [])

    return <>
        <div className={clsx(styles.DetailProduct)}>

            <form onSubmit={handleUpdate} className={clsx(styles.FormBox)}>
                <fieldset className={clsx(styles.FieldBox)}>
                    <label htmlFor="">SKU</label>
                    <InputText
                        className={clsx('p-inputtext-sm')} value={data?.['sku']} disabled />
                </fieldset>
                <fieldset className={clsx(styles.FieldBox)}>
                    <label htmlFor="">Thương hiệu</label>
                    <Dropdown
                        options={brands} value={brand ?? data?.brandCode} onChange={(e) => setbrand(e.value)}
                        optionLabel="name"
                        placeholder="Chọn thương hiệu"
                        style={{ width: 150 }} className={clsx()} />
                </fieldset>
                <fieldset className={clsx(styles.FieldBox)}>
                    <label htmlFor="">Tên sản phẩm</label>
                    {
                        <InputText
                            value={name} onChange={e => { setname(e.target.value) }}
                            style={{ width: 400 }} className={clsx('p-inputtext-sm')} />
                    }
                </fieldset>
                <fieldset className={clsx(styles.FieldBox)}>
                    <label htmlFor="">Giá tiền (vnđ)</label>
                    {
                        <InputText
                            value={price} onChange={e => { setprice(e.target.value) }}
                            className={clsx('p-inputtext-sm')} />
                    }
                </fieldset>
                <fieldset className={clsx(styles.FieldBox)}>
                    <label htmlFor="">Số lượng</label>
                    {
                        <InputText
                            value={quantity} onChange={e => { setquantity(e.target.value) }}
                            className={clsx('p-inputtext-sm')} />
                    }
                </fieldset>
                <fieldset className={clsx(styles.FieldBox)}>
                    <label htmlFor="">Danh mục</label>
                    <Dropdown
                        options={categories} value={cate} onChange={(e) => setcate(e.value)}
                        optionLabel="name" placeholder="Chọn danh mục"
                        style={{ width: 150 }} className={clsx()} />
                </fieldset>
                <fieldset className={clsx(styles.FieldBox)}>
                    <label htmlFor="">Bảo hành (tháng)</label>
                    {
                        <InputText 
                            value={warranty} onChange={e => { setwarranty(e.target.value) }}
                            className={clsx('p-inputtext-sm')} width={200} />

                    }
                </fieldset>
                <div style={{ marginLeft: 10 }}>
                    <Button label="Cập nhật" />
                </div>
                <div style={{ marginLeft: 10 }}>
                    <Button style={{backgroundColor: "tomato"}} onClick={() => { setVisible(false) }} label="Đóng" />
                </div>
            </form>

        </div>
    </>
}


export default DetailProduct;
