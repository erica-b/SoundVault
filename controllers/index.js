const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const homepageGet = (req, res) => {
    res.render('index', {title: "Welcome to our cool site"})
  }

  module.exports = {
    homepageGet
  }