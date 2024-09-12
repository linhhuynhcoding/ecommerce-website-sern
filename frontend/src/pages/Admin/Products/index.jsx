import clsx from 'clsx';
import styles from './products.module.scss';

import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

//---------BOOTSTRAP
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//---------PRIMEREACT
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import DetailProduct from './DetailProduct'

//---------API SERVICE
import { handleGetProducts } from './../../../service/ProductService';

//------------------
import Breadcrumb from '../Components/Breadcrumb';
let products = [
    { "userID": "a2dmin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
    { "userID": "admin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
    { "userID": "admin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
    { "userID": "admin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
    { "userID": "admin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
    { "userID": "admin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
    { "userID": "admin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
    { "userID": "admin", "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781", "username": "admin", "name": "Huỳnh Vũ Nhật Linh", "dob": "2024-09-05T22:21:02.000Z", "gender": "Nam", "phone": "0966126449", "email": "a@a", "role": "Admin" },
]
// let products = [];

function Products() {
    const [visible, setVisible] = useState(false);

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [statusCode, setStatusCode] = useState(null);
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);

    const [updateTab] = useOutletContext();
    useEffect(() => {
        async function getProducts() {
            await handleGetProducts().then((res) => {
                // console.log(res);
                if (res.status === 200) {
                    products = res.data['products'];
                }
                setStatusCode(res.status);
            }).catch((reason) => { return reason });
        }
        getProducts();
        updateTab('productBox');

    }, []);

    const imageBodyTemplate = (rowData) => {
        return <img src={`${rowData.images?.[0]?.['imageURL']}`} className="product-image" />;
    }

    useEffect(() => {
        if (data)
            setVisible(true);
    }, [data])

    console.log(visible)

    return (
        <>
            <h1>Sản phẩm</h1>
            <Breadcrumb />
            <div className={clsx(styles.Container)}>
                <div className={clsx(styles.HeadBar)}>
                    <div className={clsx(styles.HeadLeft)}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-categories" className={clsx(styles.Toggle)}>
                                Danh mục
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={clsx(styles.Menu)}>
                                <Dropdown.Header>Chung</Dropdown.Header>
                                <Dropdown.Item href="#/action-1">Laptop</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sản phẩm Apple</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Máy tính để bàn</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Màn hình máy tính</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Linh kiện máy tính</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Phụ kiện máy tính</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Linh kiện máy tính</Dropdown.Header>
                                <Dropdown.Item href="#/action-3">CPU</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mainboard</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">RAM</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">VGA</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">PSU</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Ổ cứng</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Tản nhiệt</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Case</Dropdown.Item>
                                <Dropdown.Header>PhỤ kiện máy tính</Dropdown.Header>
                                <Dropdown.Item href="#/action-3">Bàn phím</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Chuột máy tính</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Ghế Gaming</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className={clsx(styles.HeadRight)}>
                        <Form.Control className={clsx(styles.searcgBar)} placeholder="Tìm kiếm sản phẩm" />
                        <Button className={clsx(styles.button)}>Thêm Sản phẩm</Button>
                    </div>
                </div>
                <div className={clsx(styles.Content)}>
                    <div className={clsx(styles.TableBox)}>
                        {
                            statusCode === 200 ?
                                <DataTable resizableColumns selection={selectedProducts} columnResizeMode="fit" className={clsx(styles.Table)}
                                    value={products} size='small' stripedRows tableStyle={{ minWidth: '50rem' }}
                                    paginator rows={15} onSelectionChange={e => setSelectedProducts(e.value)}
                                >
                                    <Column align={'center'} selectionMode="multiple" style={{ width: '5%' }} />
                                    <Column field="sku" header="SKU" style={{ width: '10%' }}></Column>
                                    <Column field="productName" header="Sản phẩm" style={{ width: '20%' }}></Column>
                                    <Column align={'center'} body={imageBodyTemplate} header="Image" style={{ width: '10%' }}></Column>
                                    <Column field="productPrice" header="Giá tiền" style={{ width: '5%' }}></Column>
                                    <Column body={(rowData) => {
                                        return (
                                            <div dangerouslySetInnerHTML={{ __html: rowData.shortDes }}>
                                            </div>
                                        )
                                    }}
                                        header="Mô tả ngắn" style={{ width: '20%' }}></Column>
                                    <Column field="categoryID" header="Danh mục" style={{ width: '10%' }}></Column>
                                    <Column field="quantity" header="Số lượng" style={{ width: '5%' }}></Column>
                                    <Column body={(rowData) => { return rowData?.brands?.['brandName'] }} header="Hãng" style={{ width: '10%' }}></Column>
                                    <Column header="" body={(rowData) => { return <><a onClick={e => { setData(rowData); }}>Chi tiết</a></> }} style={{ width: '5%' }}></Column>
                                </DataTable>
                                : null
                        }
                    </div>
                </div>
                {
                    visible &&
                    <DetailProduct data={data} setVisible={setVisible} />
                }
            </div>

        </>
    );
}

export default Products;