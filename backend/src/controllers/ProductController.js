import db from '../models/index'
import {GetAllProduct} from '../services/ProductService';
class ProductController {    
    handleGetAllProducts = async (req, res) => {

        const id = (req.query.id ?? 'all').toLowerCase();
        const category = (req.query.category ?? 'all').toLowerCase();
        const limit = req.query.limit ? Number(req.query.limit) : null;
        console.log(req.query.limit)
        const products = await GetAllProduct(id, category, limit);
        
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            products  
        });
    }         


}

module.exports = new ProductController;