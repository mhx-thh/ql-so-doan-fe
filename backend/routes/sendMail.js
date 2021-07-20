const express = require("express");
const router = express.Router();

const sendMailController = require('../controller/sendMail');

router.post('', sendMailController.sendMail);

module.exports = router;
