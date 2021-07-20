const express = require("express");
const router = express.Router();

const FaculityController = require('../controller/faculity');

router.post('/addFaculity', FaculityController.addFaculity);
router.get('/listNameFaculity', FaculityController.getListNameFaculities);

module.exports = router;
