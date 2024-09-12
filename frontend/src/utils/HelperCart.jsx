import { 
    handleAddtoCart,
    handleRemovefromCart,
    handleGetCart,
} from './../service/CartService';

export let preOrderList = {
    current:
    {
        amount: 0,
        products: []
    }
}

export const carts = {
    current:
    {
        totalPrice: 0,
        products: []
    }
}
// useRef({
// totalPrice: 0,
// products: []
// });
export async function updatepreOrderList(pol) {
    preOrderList.current = pol;
}

export async function getCart() {
    
    await handleGetCart(localStorage.getItem('username')).then((res) => {
        console.log(res);
        if (res?.status === 200) {
            carts.current['totalPrice'] = res?.data['totalPrices'] ?? 0;
            carts.current['products'] = res?.data['cart'] ?? [];
        }
        console.log(carts.current)
    })
}