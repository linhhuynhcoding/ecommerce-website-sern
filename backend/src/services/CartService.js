import db from "../models";



export const addToCart = async (username, sku, quantity) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findExist = await db.Cart.findOne(
                {
                    where: { sku: sku, userID : username },
                    nest: true
                }
            );

            if (findExist) {
                await findExist.increment('quantity');

            }
            else {
                await db.Cart.bulkCreate([{
                    userID: username,
                    sku: sku,
                    quantity: quantity,
                }], {
                    validate: true,
                });
            }

            
            resolve();
        } catch (e) {
            reject(e)
        }
    });
}

export const removeFromCart = async (username, sku) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Cart.destroy({
                where: {
                    userID: username,
                    sku: sku,
                },
            });
            resolve();
        } catch (e) {
            reject(e)
        }
    });
}

export const getCart = async (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            const cart = await db.Cart.findAll({
                where: {
                    userID: username,
                },
                attributes:['sku', 'quantity']
                ,
                include: [
                    {
                        model: db.Product,
                        as: "info",
                        attributes: [
                            'productName',
                            'productPrice',
                            ['quantity', 'totalQuantity'],
                        ],
                        include: [
                            {
                                model: db.Product_Images,
                                as: "images",
                                attributes: {
                                    exclude: ['sku', 'imageID']
                                },
                                where: {
                                    imageID: 1,
                                },
                            }
                        ]
                    },

                ]
            });
            resolve(cart);
        } catch (e) {
            reject(e)
        }
    });
}

export const updateCart = async (username, sku, quantity) => {
    return new Promise(async (resolve, reject) => {
        try {
            const cart = await db.Cart.findOne({
                where: { userID: username, sku: sku },
            });

            await cart.update({
                quantity : Number(quantity)
            })

            await cart.save();

            resolve(cart);
        } catch (e) {
            reject(e)
        }
    });
}