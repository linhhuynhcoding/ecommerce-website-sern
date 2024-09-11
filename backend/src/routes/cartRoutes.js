import express from 'express';
import CartController from '../controllers/CartController';
import formidable from "express-formidable";
import { test } from '../middlewares/test.js'
const router = express.Router();


router
    .route('/add')
    .post(CartController.handleAddtoCart);
router
    .route('/remove')
    .post(CartController.handleRemovefromCart);
// .get(test, formidable(), ProductController.handleGetAllProducts);
// .get(ProductController.handleGetAllProducts);

router
    .route('/get')
    .get(CartController.handleGetCart);

router
    .route('/update')
    .put(CartController.handleUpdateCart)

export default router;