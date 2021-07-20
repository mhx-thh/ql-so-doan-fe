const express = require("express");
const router = express.Router();

const CityController = require('../controller/city');

router.get('', CityController.getCities);

module.exports = router;
