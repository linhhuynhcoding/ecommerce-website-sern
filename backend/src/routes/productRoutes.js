import express from 'express';
import ProductController from '../controllers/ProductController';
import formidable from "express-formidable";
import { test } from '../middlewares/test.js'
const router = express.Router();


router
    .route('/')
    .get(ProductController.handleGetAllProducts);
    // .get(test, formidable(), ProductController.handleGetAllProducts);
    // .get(ProductController.handleGetAllProducts);
    
    router
    .route('/get/:sku')
    .get(ProductController.handleFindProductBySKU);
    
    router
    .route('/update/:sku')
    .put(ProductController.handleUpdateProduct);

export default router;