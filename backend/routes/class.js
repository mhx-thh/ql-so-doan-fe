const express = require("express");
const router = express.Router();

const ClassController = require('../controller/class');

router.get('/getClass/:faculityName', ClassController.getClassByNameOfFaculity);

module.exports = router;
