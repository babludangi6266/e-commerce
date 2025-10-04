const express = require('express');
const { placeOrder, getOrders } = require('../controllers/orderController');
const { validateOrderData } = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/', validateOrderData, placeOrder);
router.get('/', getOrders);

module.exports = router;