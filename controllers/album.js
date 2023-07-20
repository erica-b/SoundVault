const { Profile } = require('../models');
const {Album} = require("../models")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const albumGet = async (req, res) => {
  const albums = await Album.findAll({attributes: { exclude: ['ArtistId'] }})
    res.render('album', {title: "Albums", albums})
  }

  module.exports = {
    albumGet
  }