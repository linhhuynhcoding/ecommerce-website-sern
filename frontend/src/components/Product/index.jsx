import clsx from 'clsx';
import styles from './product.module.scss';
import { toMoney } from './../../utils/StringUtil'
import { useEffect } from 'react';
import { handleAddtoCart } from '../../service/CartService';
import { carts, getCart} from '../../utils/HelperCart';

function ButtonIntoCart({ sku, handle }) {

    return (
        <>
            <button onClick={handle} data-id={sku} className={clsx(styles.Button)} >Thêm vào giỏ</button>

        </>
    );
}

function Product({ props, setLoading }) {

    // console.log(props);
    // 

    // useEffect(() => {
    //     const listOfBtn = document.querySelectorAll('div[data-content="productDetail"] > div > button');
    //     const handleBtnToCart = (e) => {
    //         e.stopPropagation();
    //         e.preventDefault();
    //         console.log(e.target);
    //     }
    //     console.log(listOfBtn)
    //     for (let b of listOfBtn) {
    //         b.addEventListener('click', handleBtnToCart);
    //     }

    //     return () => {
    //         for (let b of listOfBtn) {
    //             b.removeEventListener('click', handleBtnToCart);
    //         }
    //     }
    // }, [])
    const handleBtnToCart = async (e) => {
        setLoading(true);
        e.stopPropagation();
        e.preventDefault();
        const id = e.target?.dataset?.['id']
        console.log(e.target?.dataset?.['id']);
        if (!localStorage.username) {
            alert("Vui lòng đăng nhập!");
            return;
        } 

        await handleAddtoCart(localStorage.username, id, 1).then((res) => {
            if (res?.status == 200) {
                getCart();
                setLoading(false);
                console.log(res?.data?.errMessage);
            }
        })
    }



    const price = toMoney(props.productPrice.toString());
    return (
        <>
            <div data-content="productDetail" data-id={props?.sku ?? 0} className={clsx(styles.Product)}>
                <div className={clsx(styles.Container)}>
                    <a href={`/sku/${props?.sku}`} className={clsx(styles.ContainerProduct)}>
                        <div className={clsx(styles.containerDetail)}>
                            <div className={clsx(styles.imgBox)}>
                                <img src={props.images[0]['imageURL'] ?? ""} alt="" />
                            </div>
                            <div className={clsx(styles.brandBox)}>
                                <span>
                                    {props.brands['brandName']}
                                </span>
                            </div>
                            <div className={clsx(styles.titleBox)}>
                                {props['productName']}
                            </div>
                            <div className={clsx(styles.priceBox)}>
                                {price}
                            </div>
                        </div>
                    </a>
                    <ButtonIntoCart handle={handleBtnToCart} sku={props?.sku} />
                </div>
            </div>
        </>
    );
}

export default Product;