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
      Song.belongsTo(models.Album, { foreignKey: 'albumID' })
      Song.belongsTo(models.Profile, { as: 'favoriteSongs',
      through: 'ProfileSongs',
      foreignKey: 'songID',
      otherKey: 'profileID' })
    }
  }
  Song.init({
    artistID: DataTypes.INTEGER,
    profileID: DataTypes.INTEGER,
    albumID: DataTypes.INTEGER,
    songName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};