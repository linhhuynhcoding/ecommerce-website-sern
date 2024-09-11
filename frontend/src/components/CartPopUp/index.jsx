import clsx from "clsx";
import styles from "./CartPopUp.module.scss";
import { toMoney } from './../../utils/StringUtil'
import { useEffect } from "react";
const data = {
    sku: 1201758,
    productName: "Ổ cứng HDD WD Portable 1TB 2.5\" 3.0 (WDBUZG0010BBK-WESN)",
    productPrice: 1599000,
    categoryID: "disk",
    shortDes: "- Dung lượng: 1TB <br>- Kích thước: 2.5\" <br>- Kết nối: USB 3.0",
    images: [
        {
            imageID: 1,
            imageURL: "https://lh3.googleusercontent.com/4EpjE8i3shYTa6IdSRD4UjUCAW1ZYgA8gM07MAAZDoncWKSX965RLlWybXi2njKDhfGKs8RyuuTm0xkWVw"
        }
    ],
    brands: {
        brandName: "WD",
        brandLogo: ""
    }
}

function MiniProduct({ info, sku, quantity }) {
    return <>
        <div data-id={sku} className={clsx(styles.MiniProduct)}>
            <img src={info?.images?.[0]?.['imageURL']} alt="" />
            <div>
                <div>
                    <h5>{info?.productName}</h5>
                    <span>Số lượng {quantity}</span> <br />
                    <p><strong>{toMoney(String(info?.productPrice * quantity))}</strong></p>
                </div>

            </div>
        </div>
    </>
}


function CartPopUp({ handle, cart }) {



    useEffect(() => {
        const cart = document.getElementById('cartpopup');
        const handleOn = (e) => {
            handle(true);
        }
        const handleOff = (e) => {
            handle(false);
        }

        cart.addEventListener('mouseenter', handleOn);
        cart.addEventListener('mouseleave', handleOff);

        return () => {
            cart.removeEventListener('mouseenter', handleOn);
            cart.removeEventListener('mouseleave', handleOff);
        }
    }, []);

    return <>
        <div id="cartpopup" className={clsx(styles.CartPopUp)}>
            <div className={clsx(styles.ProductContainer)}>
                {
                    cart?.['products']?.map((c) => {
                        return <MiniProduct info={c?.['info'] ?? data} sku={c?.['sku'] ?? data['sku']} quantity={c?.['quantity'] ?? -99} />

                    })
                }
            </div>
            <div className={clsx(styles.botBar)}>
                <div>
                    <h3>{toMoney(String(cart['totalPrice']))}</h3>
                </div>
                <button>
                    Giỏ hàng
                </button>
            </div>

        </div>
    </>

}

export default CartPopUp;