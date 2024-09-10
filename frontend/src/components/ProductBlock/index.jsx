import clsx from 'clsx';
import styles from './productblock.module.scss';
import Product from '../Product';
import { Children, useEffect, useState } from 'react';

// Import Swiper........
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

//________API SERVICE
import { handleGetProducts } from './../../service/ProductService';


//_____________________________

// const data = {
// sku: 1201758,
// productName: "Ổ cứng HDD WD Elements Portable 1TB 2.5\" 3.0 (WDBUZG0010BBK-WESN)",
// productPrice: 1599000,
// categoryID: "disk",
// shortDes: "- Dung lượng: 1TB <br>- Kích thước: 2.5\" <br>- Kết nối: USB 3.0",
// images: [
// {
// imageID: 1,
// imageURL: "https://lh3.googleusercontent.com/4EpjE8i3shYTa6IdSRD4UjUCAW1ZYgA8gM07MAAZDoncWKSX965RLlWybXi2njKDhfGKs8RyuuTm0xkWVw"
// }
// ],
// brands: {
// brandName: "WD",
// brandLogo: ""
// }
// }
// 

const categories = {
    'laptop': "Laptop",
    'sanphamapple': "Sản phẩm Apple",
    'pc': "Máy tính để bàn",
    'monitor': "Màn hình máy tính",
    'linhkien': "Linh kiện máy tính",
    'phukien': "Phụ kiện máy tính",
}
const categoriesList = {
    'laptop': { code: 'lap', icon: 'fi fi-rr-laptop', name: 'Laptop', href: '/cate/laptop' },
    'sanphamapple': { code: 'sanphamapple', icon: 'fi fi-rr-laptop', name: 'Sản phẩm Apple', href: '/cate/sanphamapple' },
    'pc': { code: 'pc', icon: 'fi fi-rr-laptop', name: 'PC - Máy tính bàn', href: '/cate/pc' },
    'monitor': { code: 'monitor', icon: 'fi fi-rr-laptop', name: 'Màn hình máy tính', href: '/cate/monitor' },
    'linhkien': { code: 'cpn', icon: 'fi fi-rr-laptop', name: 'Linh kiện máy tính', href: '/cate/linhkien' },
    'phukien': { code: 'acc', icon: 'fi fi-rr-laptop', name: 'Phụ kiện máy tính', href: '/cate/phukien' },
};

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


let swiperComponents = {
    'laptop': [],
    'sanphamapple': [],
    'pc': [],
    'linhkien': [],
    'phukien': [],
};
let prev = 0;

//_____________________________

function MySwiper({ children }) {
    return <>

    </>
}

function ProductBlock({ backgroundColor, categoryID }) {
    const [statusCode, setStatusCode] = useState(false);
    let products = [];
    let productComponents = [];
    useEffect(() => {
        async function getProducts(id, categoryID, limit) {
            products = [];
            productComponents = [];
            prev = 0;

            await handleGetProducts(id, categoryID, limit, null).then((res) => {
                // console.log(res);
                if (res.status === 200) {
                    products = res.data['products'];
                }
            }).catch((reason) => { return reason });
        }
        function genarateProduct() {
            for (let p of products) {
                productComponents.push(
                    <Product key={p.sku} props={p} />
                )
            }
        }
        function genarateSwiper() {
            for (let i = 0; i < productComponents.length; i++) {
                if ((i + 5) % 5 === 0 || i - 1 === productComponents.length) {
                    console.log(swiperComponents);
                    swiperComponents[categoryID].push(
                        // <MySwiper children={products.slice(i, Math.min(i + 5, productComponents.length - i))} />
                        // <MySwiper children={[<Product props={sample} />]} />
                        <div className={clsx(styles.ContainerProduct)}>
                            {productComponents.slice(i, Math.min(i + 5, productComponents.length))}
                        </div>
                    )
                }
            }
        }
        getProducts('all', categoryID, 15).then(() => {
            genarateProduct();

            // console.log(productComponents)
            genarateSwiper();
            setStatusCode(true);
            console.log(categoryID + ': ')
            console.dir(swiperComponents[categoryID])
            // console.dir(productComponents.slice(0, 3))
        });

    }, []);

    return (
        <>
            <div className={clsx(styles.ProductBlock, '')}>

                <div className={clsx(backgroundColor, styles.Container)}>
                    <div className={clsx(styles.ProductBlockTitle)}>
                        <a href="" className={clsx(styles.title)}>
                            <div>{categoriesList[categoryID].name}</div>
                        </a>
                        <a href={categoriesList[categoryID].href} className={clsx(styles.more)}>
                            <div>Xem tất cả
                                <i class="fi fi-rr-angle-small-right"></i>
                            </div>
                        </a>
                    </div>

                </div>
                <div className={clsx(backgroundColor, styles.ContainerProduct, styles.Container)}>
                    <div className={clsx(styles.SwiperContainer)}>
                        <Swiper
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Scrollbar]}
                            className="mySwiper"
                        >
                            {
                                statusCode === true ? swiperComponents[categoryID].map((s, i) => {
                                    return <SwiperSlide key={categoryID + i}>
                                            {s}
                                    </SwiperSlide>
                                }) : "Loading...."
                            }
                        </Swiper>
                    </div>


                </div>
            </div>
        </>
    );
}

export default ProductBlock;