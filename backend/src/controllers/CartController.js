import db from '../models/index'

import {
    addToCart,
    removeFromCart,
    getCart, 
    updateCart, 
} from '../services/CartService';

class CartController {    
    handleAddtoCart = async (req, res) => {

        const {username, sku, quantity} = req.body;
        
        addToCart(username, sku, quantity).then((data) => {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Thêm sản phẩm vào giỏ thành công!'
            });
        })
    }    
    handleRemovefromCart = async (req, res) => {

        const {username, sku} = req.body;

        removeFromCart(username, sku).then((data) => {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Xóa sản phẩm khỏi giỏ thành công!'
            });
        })        
    }       

    handleGetCart = async (req, res) => {

        const {username} = req.query;

        if (!username) {
            return res.status(404).json({
                errCode: 1,
                errMessage: 'Lỗi tham số API!'
            });
        }

        getCart(username).then((data) => {
            let totalPrices = 0;
            data.forEach(element => {
                totalPrices += element['info']?.['productPrice'] ?? 0;
            });
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Lấy giỏ thành công!',
                totalPrices: totalPrices,
                cart : data
            });
        }) 
               
    }   

    handleUpdateCart = async (req, res) => {
        console.log(req.body)
        const { username, sku, quantity  } = req.body;
        // console.log({ username, email, phone, dob, gen });

        if (!username || !sku || !quantity) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        else {
            await updateCart(username, sku, quantity).then((data) => {
                console.log(data);
                if (data) {
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: 'Cập nhật thành công!',
                        data
                    });
                }
                else {
                    return res.status(404).json({
                        errCode: 1,
                        errMessage: 'Cập nhật thất bại!'
                    });
                }            
            }).catch((e) => {return res.status(505)});
        }
    }
}

module.exports = new CartController;