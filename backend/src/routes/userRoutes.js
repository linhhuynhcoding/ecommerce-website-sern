import express from 'express';
import UserController from '../controllers/UserController';
import formidable from "express-formidable";
import {test} from '../middlewares/test.js'
import { verifyMail } from '../middlewares/verifyMailMiddlewares.js';
const router = express.Router();


router
    .route('/')
    .get(UserController.handleGetUser)
    .post(UserController.handleCreateUserRequest);
    // .get(test, formidable(), ProductController.handleGetAllProducts);
router
    .route('/register')
    .post(UserController.handleCreateUser);
    // .post(verifyMail, UserController.handleCreateUser);
router
    .route('/login')
    .post()
export default router;