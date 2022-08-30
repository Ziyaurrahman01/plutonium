const express = require('express');
const router = express.Router();
const MyController = require('../controllers/myController')
const MyMid = require('../middlewares/myMiddlewares')

router.post('/createProduct', MyController.createProduct)
router.post('/createUser', MyMid.headerCheck, MyController.createUser)
router.post('/orderPurchase', MyMid.headerCheck, MyController.orderPurchase)
router.get('/getOrders', MyController.getOrders)

module.exports = router;