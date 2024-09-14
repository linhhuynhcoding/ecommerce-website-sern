import db from "../models";
import { Op } from "sequelize";
export const GetAllProduct = (idProduct, category, page, pageSize) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = {};
            if (idProduct === 'all') {
                products = await db.Product.findAll({
                    // order: [
                    //     ['productPrice', 'DESC'],
                    // ],
                    limit: pageSize ?? null,
                    offset: page ?? null,
                    where: {

                    },
                    attributes: {
                        exclude: ['des']
                    },
                    include: [
                        {
                            model: db.Categories,
                            as: 'categories',
                            where: {
                                [Op.or]: [
                                    { parentID: (category === 'all' ? false : category) },
                                    { categoryID: (category === 'all' ? false : category) }
                                ],
                            }
                        },
                        {
                            model: db.Product_Images,
                            as: "images",
                            attributes: {
                                exclude: ['sku']
                            },
                            where: {
                                imageID: 1,
                            },
                            nest: true,

                        },
                        {
                            model: db.Brands,
                            as: "brands",
                            attributes: {
                                exclude: ['brandCode']
                            },
                        }
                    ],
                    // raw: true,
                    nest: true,
                });
            }
            else {
                products = await db.Product.findOne({
                    where: { sku: Number(idProduct) },
                    include: [{
                    }],
                    raw: true,
                    nest: true
                });
            }
            resolve(products);

        } catch (e) {
            reject(e)
        }
    });
}

export const FindProductBySKU = (sku) => {
    return new Promise(async (resolve, reject) => {
        try {
            const products = await db.Product.findOne({
                where: { sku: Number(sku) },
                include: [
                    // {
                    //     model: db.Attribute_Products,
                    //     as: "attributes",
                    //     attributes: {
                    //         exclude: ['sku']
                    //     },
                    //     include: [
                    //         {
                    //             model: db.Attributes,
                    //             as: "attri_name",
                    //             attributes: {
                    //                 exclude: ['attri_code']
                    //             },
                    //             nest: false

                    //         }
                    //     ],

                    // },
                    {
                        model: db.Product_Images,
                        as: "images",
                        attributes: {
                            exclude: ['sku']
                        },
                    },
                    {
                        model: db.Brands,
                        as: "brands",
                        attributes: {
                            exclude: ['brandCode']
                        },
                    }
                ],
                // raw: true,
                nest: true
            });

            resolve(products);

        } catch (e) {
            reject(e)
        }
    });
}

export const UpdateProductInfo = (
    sku,
    productName,
    productPrice,
    categoryID,
    warranty,
    quantity,
    brandCode
) => {
    return new Promise(async (resolve, reject) => {
        try {

            const product = await db.Product.findOne({
                where: { sku: Number(sku) },
            });

            await product.update({
                productName: productName,
                productPrice: productPrice,
                categoryID: categoryID,
                warranty: warranty,
                quantity: quantity,
                brandCode: brandCode,
            })

            await product.save();

            resolve(product);

        } catch (e) {
            reject(e)
        }
    });
}

export const CreateProduct = (sku, productName, productPrice,
    categoryID, warranty, quantity, brandCode, images) => {
    return new Promise(async (resolve, reject) => {
        try {

            await db.Product.bulkCreate([{
                sku: sku,
                productName: productName,
                productPrice: productPrice,
                categoryID: categoryID,
                warranty: warranty,
                quantity: quantity,
                brandCode: brandCode,
            }], {
                validate: true,
            }).then(async () => {
                await db.Product_Images.bulkCreate(

                    images.map((image, i) => {
                        return {
                            sku: Number(sku),
                            imageID: Number(i + 1),
                            imageURL: image['imageURL'],
                        }
                    })

                    , {
                        validate: true,
                    });
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}