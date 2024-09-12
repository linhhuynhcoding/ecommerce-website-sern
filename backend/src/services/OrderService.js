import db from "../models";
import {Op} from 'sequelize'
import { v1 as uuidv1 } from 'uuid';


export const CreateOrder = (
    userID, shipfee, amount, notes, products
) => {
    return new Promise(async (resolve, reject) => {
        try {
            const orderID = uuidv1();

            await db.Order.bulkCreate([{
                OrderID: orderID,
                userID: userID,
                shipfee: shipfee,
                amount: amount,
                notes: notes,
                status: 'Approved',
                approved_at: new Date(),
            }], {
                validate: true,
            }).then(async () => {

                await db.OrderItem.bulkCreate(
                    products.map((product) => {

                        return {
                            OrderID: orderID,
                            sku: product['sku'],
                            price: product['price'],
                            quantity: product['quantity'],
                        }
                    }), {
                    validate: true,
                });
            });
            resolve(orderID);
        } catch (e) {
            reject(e);
        }
    })
}

export const GetAllOrders = (filters) => {
    const searchFilters = {
        'paying' : 'Approved',
        'shipping' : 'Shipping',
        'done' : 'Done',
    }

    return new Promise(async (resolve, reject) => {
        try {
            let orders = [];
            orders = await db.Order.findAll({
                where: {
                    status: [searchFilters?.[filters?.['status']] || ['Approved', 'Paying', 'Shipping', 'Done']],
                },
                attributes: {
                    exclude: ['userID']
                },
                include: [{
                    model: db.OrderItem,
                    as: 'items',
                    attributes: {
                        exclude: ['OrderID']
                    },
                    include: [
                        {
                            model: db.Product,
                            as: 'products',
                            attributes: ['productName', 'productPrice']
                        }
                    ]

                }]
            });

            resolve(orders);

        } catch (e) {
            reject(e)
        }
    });
}
export const GetUserOrders = (username, filters) => {
    // filters = {
    //     status: ['all', 'paying', 'shipping', 'done']
    // }
    const searchFilters = {
        'paying' : 'Approved',
        'shipping' : 'Shipping',
        'done' : 'Done',
    }
    return new Promise(async (resolve, reject) => {
        try {
            let orders = [];
            orders = await db.Order.findAll({
                where : {
                    userID: username,
                    status: [searchFilters?.[filters?.['status']] || ['Approved', 'Paying', 'Shipping', 'Done']],
                },
                attributes: {
                    exclude: ['userID']
                },
                include: [{
                    model: db.OrderItem,
                    as: 'items',
                    attributes: {
                        exclude: ['OrderID']
                    },
                    include: [
                        {
                            model: db.Product,
                            as: 'products',
                            attributes: ['productName', 'productPrice']
                        }
                    ]

                }]
            });

            resolve(orders);

        } catch (e) {
            reject(e)
        }
    });
}
export const FindOrderByID = (OrderID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orders = {};
            orders = await db.Order.findOne({
                where: {
                    OrderID: OrderID,
                },
                attributes: {
                    exclude: ['userID']
                },
                include: [{
                    model: db.OrderItem,
                    as: 'items',
                    attributes: {
                        exclude: ['OrderID']
                    },
                    include: [
                        {
                            model: db.Product,
                            as: 'products',
                            attributes: ['productName', 'productPrice']
                        }
                    ]

                }]
            });

            resolve(orders);

        } catch (e) {
            reject(e)
        }
    });
}

export const UpdatePaidOrder = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {

            const order = await db.Order.findOne({
                where: { OrderID: orderId },
            });

            await order.update({
                status: 'Shipping',
                paid_at: new Date()
            })

            await order.save();

            resolve(order);

        } catch (e) {
            reject(e)
        }
    });
}

export const UpdateShippedOrder = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {

            const order = await db.Order.findOne({
                where: { OrderID: orderId },
            });

            await order.update({
                status: 'Done',
                shipped_at: new Date()
            })

            await order.save();

            resolve(order);

        } catch (e) {
            reject(e)
        }
    });
}