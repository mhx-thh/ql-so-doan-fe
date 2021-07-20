const express = require("express");
const router = express.Router();

const PayController = require('../controller/momo');

router.post('', PayController.generateSignatureAndSendToMomoServer);

module.exports = router;
