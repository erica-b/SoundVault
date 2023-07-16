const { Profile } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const genreGet = (req, res) => {
    res.render('genre', {title: "My Favorite Genres"})
  }

  module.exports = {
    genreGet
  }