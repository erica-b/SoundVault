const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* Delete User */
const deleteUserByID = async (req, res) => {
    const id = req.params.id;
  
    const { firstName, lastName, email } = await Profile.findByPk(req.params.id);
    console.log(firstName);
    res.render("delete", {
      title: "Delete this User",
      id,
      firstName,
      lastName,
      email,
    });
  };

  module.exports = {
    deleteUserByID
  }