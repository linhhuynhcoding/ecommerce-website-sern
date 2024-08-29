import express from 'express';
import homeController from '../controllers/HomeController';
const router = express.Router();

function initWebRoutes (app) {
    router.get('/crud', homeController.index);
    router.post('/post-crud', homeController.post_crud);
    return app.use("/", router);
}

module.exports = initWebRoutes;
