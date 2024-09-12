import express from 'express';

import OrderController from '../controllers/OrderController';
import formidable from "express-formidable";

const router = express.Router();

router
    .route('/')
    .get(OrderController.handleGetAllOrders)
    .post(OrderController.handleCreateOrder)

router
    .route('/mine')
    .get(OrderController.handleGetUserOrders)

router
    .route('/:orderId')
    .get(OrderController.handleFindOrderByID)

router
    .route("/:orderId/pay")
    .put(OrderController.markOrderAsPaid);
    
router
    .route("/:orderId/ship")
    .put(OrderController.markOrderAsDelivered);
export default router;
