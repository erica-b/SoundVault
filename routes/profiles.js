var express = require('express');
var router = express.Router();
const {Profile} = require ("../models")
const findProfile = require ("../middleware/findProfile")
const profileController = require ("../controllers/profiles")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const saltRounds = 10;


router.get('/', profileController.registerGet)

router.post ("/", profileController.registerUser)

router.get("/myprofile/:id", findProfile , profileController.profileGet)

module.exports = router;
