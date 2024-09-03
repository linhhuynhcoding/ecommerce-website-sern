import clsx from 'clsx';
import styles from './product.module.scss';



function ButtonIntoCart() {
    return (
        <>
            <button className={clsx(styles.Button)} >Thêm vào giỏ</button>

        </>
    );
}

function Product() {
    return (
        <>
            <div className={clsx(styles.Product)}>
                <div className={clsx(styles.Container)}>
                    <a href="" className={clsx(styles.ContainerProduct)}>
                        <div className={clsx(styles.containerDetail)}>
                            <div className={clsx(styles.imgBox)}>
                                <img src="https://lh3.googleusercontent.com/jzjru3_5x_08cDrJOQuUZ0whGb_iYBnp4AdNk5ZmEckKmd48BZzGqUlQtxmqlBJg6UenokGTt6_SN-B_pQ=w230-rw" alt="" />
                            </div>
                            <div className={clsx(styles.brandBox)}>
                                <span>
                                NEWMEN
                                </span>
                            </div>
                            <div  className={clsx(styles.titleBox)}>
                                Chuột không dây, điều khiển bằng niềm tin
                            </div>
                            <div  className={clsx(styles.priceBox)}>
                                <p>199.000.000 ₫</p>
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