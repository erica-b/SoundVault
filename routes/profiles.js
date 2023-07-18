var express = require('express');
var router = express.Router();
const app = express()
const {Profile} = require ("../models")
const findProfile = require ("../middleware/findProfile")
const profileController = require ("../controllers/profiles")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const session = require("express-session")
const multer = require('multer');
const { authCheck } = require('../middleware/authCheck');
const upload = multer({ dest: 'uploads/' });
const saltRounds = 10;


router.get('/', profileController.registerGet)

router.post('/', profileController.registerUser)

/* Profile Route */

// Running a check to see if they have the jwt token before they are able to view the account

// Still need to do somethign with the route so that the appropriate id is passed to the url that matches the user that was logged in
router.get("/:id", authCheck ,findProfile , profileController.profileGet)





// renders the login ejs template
router.get("/login", profileController.loginGet)

  // Post route to handle the user login

  router.post("/login", profileController.loginPost)



module.exports = router;
