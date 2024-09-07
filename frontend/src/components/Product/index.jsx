import clsx from 'clsx';
import styles from './product.module.scss';



function ButtonIntoCart() {
    return (
        <>
            <button className={clsx(styles.Button)} >Thêm vào giỏ</button>

        </>
    );
}

function Product({ props }) {
    // console.log(props);
    // 
    const toMoney = (s) => {
        let res = '';
        for (let i = s.length - 1; i >= 0; i--) {
            if (((s.length - i) % 3) === 0) {
                res = '.' + s.slice(i, i + 3) + res;
            }
        }
        res = s.slice(0, s.length % 3) + res;
        if (res[0] === '.') res = res.slice(1, res.length);
        return res;
    }
    const price = toMoney(props.productPrice.toString());
    return (
        <>
            <div className={clsx(styles.Product)}>
                <div className={clsx(styles.Container)}>
                    <a href="#" className={clsx(styles.ContainerProduct)}>
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
                                { price}₫
                            </div>
                        </div>
                    </a>
                    <ButtonIntoCart />
                </div>
            </div>
        </>
    );
}

export default Product;