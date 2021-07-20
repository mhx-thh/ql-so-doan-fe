const express = require("express");
const router = express.Router();

const FaculityController = require('../controller/faculity');

router.post('/addFaculity', FaculityController.addFaculity);

module.exports = router;
