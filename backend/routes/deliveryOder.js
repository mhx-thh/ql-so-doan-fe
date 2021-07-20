const express = require("express");
const router = express.Router();

const DeliveryOrderController = require('../controller/deliveryOrder');

router.get('/:dcid', DeliveryOrderController.getDeliveryOder);

module.exports = router;
