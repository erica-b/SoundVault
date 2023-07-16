const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const artistGet = (req, res) => {
    res.render('artist', {title: "My Favorite Artists"})
  }

  module.exports = {
    artistGet
  }