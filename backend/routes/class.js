const express = require("express");
const router = express.Router();

const ClassController = require('../controller/class');

router.get('/getClass', ClassController.getClassByNameOfFaculity);

module.exports = router;
