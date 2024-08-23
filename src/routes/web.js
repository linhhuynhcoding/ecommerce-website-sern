import express from 'express';
import homeController from '../app/controllers/HomeController';
const router = express.Router();

function initWebRoutes (app) {
    router.get('/', homeController.index);
    return app.use("/", router);
}

module.exports = initWebRoutes;
