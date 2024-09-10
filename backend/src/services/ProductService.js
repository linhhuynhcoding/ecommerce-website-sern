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
                        exclude: ['des', 'brandCode', 'warranty',]
                    },
                    include: [
                        {
                            model: db.Categories,
                            as: 'categories',
                            where : {                                
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
