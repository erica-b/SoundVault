const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const songGet = (req, res) => {
    res.render('song', {title: "My Favorite Songs"})
  }

  module.exports = {
    songGet
  }