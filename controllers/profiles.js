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

  if (!req.session.profileID) {
    // User is not logged in, redirect to login page
    res.redirect('/login');
  }else {

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
}

module.exports = {

  registerUser,
 registerGet,
 profileGet
}