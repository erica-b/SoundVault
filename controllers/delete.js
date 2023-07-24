const { Profile, ProfileAlbum} = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* Delete User */
const deleteUserByID = async (req, res) => {
    const id = req.user.id;
  
    const { firstName, lastName, email } = await Profile.findByPk(req.user.id);
    console.log(firstName);
    res.render("delete", {
      title: "Delete this User",
      id,
      firstName,
      lastName,
      email,
    });
  };

  const deleteUserPost = async (req, res) => {
    const id = req.user.id;
    await ProfileAlbum.destroy({ where: { profileID:id }});
    await Profile.destroy({ where: { id: id } });
    res.render('index', {title: "Rhythm Retreat"})
  }

  module.exports = {
    deleteUserByID,
    deleteUserPost
  }