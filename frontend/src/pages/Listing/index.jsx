import clsx from 'clsx';
import styles from './listing.module.scss';
import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//---------------MY COMPONENTS
import Loading from '../../components/Loading/index.jsx';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterBar from '../../components/FilterBar';
import Product from '../../components/Product';
//---------------PRIME REACT

//---------------ANOTHER COMPONENTS

//________API SERVICE
import { handleGetProducts } from './../../service/ProductService';

//--------------------------
const sample = {
    sku: 0,
    productName: "Sản phẩm ABC",
    productPrice: 99999999,
    categoryID: "none",
    shortDes: "",
    images: [
        {
            imageID: 1,
            imageURL: "https://dictionary.cambridge.org/images/thumb/white_noun_001_19234.jpg?version=6.0.31"
        }
    ],
    brands: {
        brandName: "BRAND",
        brandLogo: ""
    }
}
function Listing() {
    const params = useParams();
    const [loading, setLoading] = useState(false);

    let categoryID = params['categoryID'] ?? 'all';
    // console.log(params);
    const [statusCode, setStatusCode] = useState(false);
    const [page, setPage] = useState(1);
    let products;
    let productComponents = useRef([]);

    // useEffect(() => {
    //     async function getProducts(id, categoryID, limit, page) {
    //         products = [];
    //         await handleGetProducts(id, categoryID, limit, page).then((res) => {
    //             // console.log(res);
    //             if (res.status === 200) {
    //                 products = res.data['products'];
    //             }
    //         }).catch((reason) => { return reason });
    //     }
    //     function genarateProduct() {
    //         for (let p of products) {
    //             productComponents.current.push(
    //                 <Product key={p.sku} props={p} />
    //             )
    //         }
    //     }
    //     getProducts('all', categoryID, 8, 1).then(() => {
    //         genarateProduct();

    //         console.log(productComponents)
    //         setStatusCode(true);
    //         // console.dir(productComponents.slice(0, 3))
    //     });

    // }, []);

    useEffect(() => {
        setStatusCode(false);
        async function getProducts(id, categoryID, limit, page) {
            products = [];
            await handleGetProducts(id, categoryID, limit, page).then((res) => {
                // console.log(res);
                if (res.status === 200) {
                    products = res.data['products'];
                }
            }).catch((reason) => { return reason });
            return products;
        }
        function genarateProduct() {
            for (let p of products) {
                productComponents.current.push(
                    <Product setLoading={setLoading} key={p.sku} props={p} />
                )
            }
        }
        getProducts('all', params['categoryID'] ?? 'all', 8, (page - 1) * 8).then((x) => {
            genarateProduct();
            if (x.length < 8) {
                const elm = document.getElementById('morebox');
                elm.classList.add('is-disable')
            }
            // console.log(productComponents)
            setStatusCode(true);
            // console.dir(productComponents.slice(0, 3))
        });

    }, [page]);


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Home Page</title>

            </Helmet>
            <Header onMenu={true} />

            <main>
                {loading ? <Loading></Loading> : null}

                <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
                <div className={clsx('clearHeader')}></div>
                {/* <TopHome /> */}
                <div className={clsx(styles.Main)}>
                    <div className={clsx(styles.listing)}>
                        <div className={clsx(styles.Container)}>
                            <FilterBar />
                            <div className={clsx(styles.productBar)}>
                                <div className={clsx(styles.wrapper)}>
                                    {statusCode === true ? <>
                                        {
                                            productComponents.current.map((x, i) => {
                                                return x;
                                            })
                                        }
                                    </>
                                        : "aaaa"}
                                </div>
                                <div id="morebox" className={clsx(styles.moreBox)}>
                                    <a className={clsx(styles.more)} onClick={() => {
                                        setPage(page + 1);
                                    }}>
                                        Xem thêm sản phẩm
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    );
}


export default Listing;