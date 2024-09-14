import {
    CreateOrder,
    GetAllOrders,
    FindOrderByID,
    GetUserOrders,
    UpdatePaidOrder,
    UpdateShippedOrder,
} from '../services/OrderService';

import {
    GetEmailUser
} from '../services/UserService';

import { sendDoneOrder } from './../utils/EmailUtil'

class OrderController {
    handleCreateOrder = async (req, res) => {
        const {userID, shipfee, amount, notes, products} = req?.body;

        if (!userID || !shipfee || !amount || !products ){
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }

        await CreateOrder(
            userID, shipfee, amount, notes, products
        ).then(data => {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Thêm đơn hàng vào Database thành công!',
                orderID: data
            });
        }).catch(e => {
            return res.status(505).json({
                errCode: 1,
                errMessage: 'Lỗi Server!',
                e
            });
        })
    }

    handleGetAllOrders = async (req, res) => {
        const { filters } = req.query;

        await GetAllOrders(filters).then((data) => {

            return res.status(200).json({
                errCode: 0,
                errMessage: 'Tìm thành công!',
                data
            });
        }).catch((e) => {
            console.log(e);
            return res.status(505).json({
                errCode: 1,
                errMessage: 'Lỗi Server!',
                err: e
            });
        });
    }

    handleGetUserOrders = async (req, res) => {
        const { username, filters } = req.query;
        if (!username) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        
        await GetUserOrders(username, filters).then((data) => {

            return res.status(200).json({
                errCode: 0,
                errMessage: 'Tìm thành công!',
                data
            });
        }).catch((e) => {
            console.log(e);
            return res.status(505).json({
                errCode: 1,
                errMessage: 'Lỗi Server!',
                err: e
            });
        });
    }

    handleFindOrderByID = async (req, res) => {

        console.log(req.params)

        const { orderId } = req.params;

        if (!orderId) {
            return res.status(404).json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        await FindOrderByID(orderId).then((data) => {

            return res.status(200).json({
                errCode: 0,
                errMessage: 'Tìm thành công!',
                data
            });
        }).catch((e) => {
            console.log(e);
            return res.status(505).json({
                errCode: 1,
                errMessage: 'Lỗi Server!',
                err: e
            });
        });
    }

    markOrderAsPaid = async (req, res) => {

        const { orderId } = req.params;

        if (!orderId) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        else {
            await UpdatePaidOrder(orderId).then((data) => {
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

    markOrderAsDelivered = async (req, res) => {

        const { orderId } = req.params;

        if (!orderId) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        else {
            await UpdateShippedOrder(orderId).then(async (data) => {
                console.log(data);
                if (data) {
                    await GetEmailUser(data?.userID).then((email) => {
                        sendDoneOrder(email, orderId);
                    })
                    
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

module.exports = new OrderController;