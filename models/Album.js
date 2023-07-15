'use strict';

const Profile = require("./Profile");


const models = require('../models');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsToMany(models.Profile, {through:"ProfileAlbum"})
      Album.belongsTo(models.Artist)
      Album.hasMany(models.Song, {foreignKey: "songID"})
      Album.belongsTo(models.Genre)
    }
  }
  Album.init({
    albumName: DataTypes.STRING,
    albumCover: DataTypes.STRING,
    albumYear: DataTypes.INTEGER,
    artistID: DataTypes.INTEGER,
    genreID: DataTypes.INTEGER,
    songID: DataTypes.INTEGER,
    profileID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};