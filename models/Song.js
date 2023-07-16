'use strict';
const models = require('../models');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsToMany (models.Profile, {through: 'ProfileSong'})
      Song.belongsTo(models.Album)
      Song.belongsTo(models.Artist)
      Song.belongsTo(models.Genre)
    }
  }
  Song.init({
    artistID: DataTypes.INTEGER,
    genreID: DataTypes.INTEGER,
    profileID: DataTypes.INTEGER,
    albumID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};