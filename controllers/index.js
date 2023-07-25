const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const homepageGet = (req, res) => {
    res.render('index', {title: "SoundVault"})
  }

  module.exports = {
    homepageGet
  }
  