import db from '../models/index'
import {GetAllProduct} from '../services/ProductService';
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


}

module.exports = new ProductController;