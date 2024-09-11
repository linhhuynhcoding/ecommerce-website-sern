import express from 'express';
import HomeController from '../controllers/HomeController';
import APIProvinceController from '../controllers/APIProvinceController';
import formidable from "express-formidable";
import { test } from '../middlewares/test.js'
const router = express.Router();

router
    .route('/api/province')
    .get(APIProvinceController.handleGetCity)

router
    .route('/api/province/district')
    .get(APIProvinceController.handleGetDistrict)

router
    .route('/api/province/ward')
    .get(APIProvinceController.handleGetWard)


export default router;