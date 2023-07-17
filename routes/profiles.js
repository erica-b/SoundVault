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


// Handle the creation of the login token 


// renders the login ejs template
router.get("/login", async (req, res) => {
    res.render("login", { title: "Login!" });
  });

  // Post route to handle the user login

  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    console.log(username, password);
  
    // check if the username exists in db
  
    const user = await Profile.findOne({ where: { username } });
    
    if (user == null) {
        res.render("login", { title: "Login", error: "User not Found" });
    } else {
        // Load the hash from password db
        req.session.profileID = user.id
        console.log(password, user.password);
        const hashPassword = user.password;
        await bcrypt.compare(password, hashPassword, function (err, result) {
        console.log(result);
  
        if (result) {
          const token = jwt.sign({foo:'bar'}, 'superSecretPrivateKey', {expiresIn: "1h"})
          console.log(token)
          res.cookie("token", token)
          res.redirect("/");
        } else {
          res.render("login", {
            title: "Login",
            error: "Passwords do not match",
          });
        }
      });
    }
  });



module.exports = router;
