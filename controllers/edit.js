const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const editUserByID = async (req, res, next) => {
    const id = req.params.id;
    const { firstName, lastName, email } = await Profile.findByPk(id);
    console.log(firstName, lastName, email, id);
    res.render('edit', { title: 'Edit Profile', id, firstName, lastName, email });
  }
  
  const postEditUserByID = async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, email } = req.body;
    await Profile.update({ firstName, lastName, email }, { where: { id: id } });
    res.redirect(`/profile/${id}`);
  };

  module.exports = {
    editUserByID,
    postEditUserByID, 
  }