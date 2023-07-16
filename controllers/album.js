const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const albumGet = (req, res) => {
    res.render('album', {title: "My Favorite Albums"})
  }

  module.exports = {
    albumGet
  }