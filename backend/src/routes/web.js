import express from 'express';
import homeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';
import ProductController from '../controllers/ProductController';
const router = express.Router();

function initWebRoutes (app) {
    // router.get('/', homeController.home );
    // router.get('/crud', homeController.index);
    // router.post('/post-crud', homeController.post_crud);
    router.get('/api/get-all-user', UserController.handleGetAllUsers)
    router.get('/api/get-product', ProductController.handleGetAllProducts)
    return app.use("/", router);
}

module.exports = initWebRoutes;
