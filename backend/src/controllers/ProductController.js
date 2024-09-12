import db from '../models/index'
import {
    GetAllProduct,
    FindProductBySKU,
    UpdateProductInfo,
} from '../services/ProductService';
class ProductController {
    handleGetAllProducts = async (req, res) => {

        const id = (req.query.id ?? 'all').toLowerCase();

        const category = (typeof req.query.category !== "undefined") ? (req.query.category === '' ? 'all' : req.query.category).toLowerCase() : 'all'
        const pageSize = req.query.pageSize ? Number(req.query.pageSize) : null;
        const page = req.query.page ? Number(req.query.page) : null;
        console.log(req.query.limit)
        const products = await GetAllProduct(id, category, page, pageSize);


        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            products
        });
    }

    handleFindProductBySKU = async (req, res) => {

        const { sku } = req.params;

        if (!sku) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }

        await FindProductBySKU(sku).then(data => {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Tìm thành công!',
                product: data
            });
        }).catch(e => {
            return res.status(505).json({
                errCode: 1,
                errMessage: 'Lỗi Server!',
                e
            });
        })
    }

    handleUpdateProduct = async (req, res) => {

        const { sku } = req.params;
        const {
            productName,
            productPrice,
            categoryID,
            warranty,
            quantity,
            brandCode
        } = req.body.product;

        if (
            !sku || !productName || !productPrice || !categoryID || !warranty || !quantity || !brandCode
        ) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
                sku,
                productName,
                productPrice,
                categoryID,
                warranty,
                quantity,
                brandCode
            });
        }

        await UpdateProductInfo(
            sku,
            productName,
            productPrice,
            categoryID,
            warranty,
            quantity,
            brandCode
        ).then((data) => {
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
        }).catch((e) => { return res.status(505) });

    }
}

module.exports = new ProductController;