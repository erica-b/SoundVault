var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');
// const authCheck = require("../middleware/authCheck");
// const findUser = require('../middleware/findUser');

 // get homePage ejs template at this route url
 router.get('/', indexController.homepageGet)

module.exports = router;
