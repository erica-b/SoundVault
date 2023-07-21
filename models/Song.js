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
      Song.belongsTo(models.Album, { foreignKey: 'id' })
      Song.belongsTo(models.Artist, { foreignKey: 'id' })
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