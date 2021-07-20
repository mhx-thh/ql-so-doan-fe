const express = require("express");
const router = express.Router();

const productController = require('../controller/product');

router.get('/', productController.getDeliveryCompany);

module.exports = router;
