const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Handles the rendering of our template to allow for the creation of a new user

const registerGet = (req, res) => {
  res.render('register', {title: "Login to our cool site"})
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
      res.send("The user has been created");
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
    username,
    firstName,
    lastName,
    email,
    id,
    profileImage,
  });
}




module.exports = {

  registerUser,
 registerGet,
 profileGet
}