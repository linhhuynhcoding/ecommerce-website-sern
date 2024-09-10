import express from 'express';
import HomeController from '../controllers/HomeController';
import formidable from "express-formidable";
import {test} from '../middlewares/test.js'
const router = express.Router();


router
    .route('/')
    .get(HomeController.home);
    // .get(test, formidable(), ProductController.handleGetAllProducts);
    // .get(ProductController.handleGetAllProducts);

export default router;