import express from 'express';
import productRoutes from './productRoutes.js';
import userRoutes from './userRoutes.js';
import homeRoutes from './homeRoutes.js';
import cartRoutes from './cartRoutes.js';
function initWebRoutes (app) {
    // router.get('/', homeController.home );
    // router.get('/crud', homeController.index);
    // router.post('/post-crud', homeController.post_crud);
    // router.get('/api/get-all-user', UserController.handleGetAllUsers)
    app.use("/api/cart", cartRoutes);
    app.use("/api/products", productRoutes);
    app.use("/api/users", userRoutes);
    app.use("/", homeRoutes)

}

module.exports = initWebRoutes;
