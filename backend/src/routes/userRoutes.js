import express from 'express';
import UserController from '../controllers/UserController';
import formidable from "express-formidable";
import { test } from '../middlewares/test.js'
import { verifyMail } from '../middlewares/verifyMailMiddlewares.js';
import { authenticate } from '../middlewares/authMiddlewares.js';
const router = express.Router();

router
    .route('/')
    .get(UserController.handleGetUser)
    .post(UserController.handleCreateUserRequest);
// .get(test, formidable(), ProductController.handleGetAllProducts);
router
    .route('/auth')
    .get(UserController.auth);

router
    .route('/register')
    .post(verifyMail, UserController.handleCreateUser);
    // .post(UserController.handleCreateUser);
router
    .route('/login')
    .post(UserController.handleLogin);
router
    .route('/logout')
    .post(UserController.handleLogout);
router
    .route('/profile')
    // .get(UserController.getCurrentUserProfile)
    .get(authenticate, UserController.getCurrentUserProfile)
    .put(authenticate, UserController.updateCurrentUserProfile);

router
    .route('/profile/address')
    .get(authenticate, UserController.getCurrentUserAddress)
    .put(authenticate, UserController.updateCurrentUserAddress)
    // .get(UserController.getCurrentUserProfile)
export default router;