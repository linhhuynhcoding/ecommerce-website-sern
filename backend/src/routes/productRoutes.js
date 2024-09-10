import express from 'express';
import ProductController from '../controllers/ProductController';
import formidable from "express-formidable";
import {test} from '../middlewares/test.js'
const router = express.Router();


router
    .route('/')
    .get(ProductController.handleGetAllProducts);
    // .get(test, formidable(), ProductController.handleGetAllProducts);
    // .get(ProductController.handleGetAllProducts);

export default router;