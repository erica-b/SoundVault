const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const fs = require('fs')
const jwt = require('jsonwebtoken');
const saltRounds = 10;

//Handles the rendering of our template to allow for the creation of a new user

const registerGet = (req, res) => {
  res.render('register', {title: "Create an Account"})
}

// Allows for the creation of a new user and pushes it up to the profile table
const registerUser = 
  async (req, res) => {

    let { firstName, lastName, email, username, password,profileImage } = req.body;
    console.log(firstName, lastName, email, username, password, profileImage);
  
    try {
      let hashPassword = await bcrypt.hash(password, saltRounds);
  

      console.log("Original Password: ", password);
  
      console.log(password);
      const newProfile = await Profile.create({
        firstName,
        lastName,
        email,
        username,
        password: hashPassword,
        profileImage
      });
  
      console.log("New User's auto-generated ID:", newProfile.id);
      res.redirect("/")
    } catch (error) {
      console.log(error);
    }
  }

// Handle displaying a certain user based on the id

const profileGet = (req,res) => {

 

  const { firstName, lastName, email, profileImage, id, username } = req.profile;
  console.log (firstName, lastName, email, profileImage )

  res.render("profile", {
    title: "User Profile",
    profileID: req.session.profileID,
    username,
    firstName,
    lastName,
    email,
    id,
    profileImage,
  });

}



// Rendering the ejs template for the login page

const loginGet = async (req, res) => {
  res.render("login", { title: "Login!" });
}


// Handling the login poriton of the user

const loginPost = async (req, res) => {
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
        const token = jwt.sign({foo: req.session.profileID}, 'superSecretPrivateKey', {expiresIn: "1h"})
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
}

module.exports = {

  registerUser,
 registerGet,
 profileGet,
 loginPost,
 loginGet
}