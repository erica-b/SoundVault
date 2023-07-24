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
      Album.belongsToMany(models.Profile, {
        as: 'favoriteAlbums',
        through: 'ProfileAlbums',
        foreignKey: 'albumID',
        otherKey: 'profileID',
      });
      Album.hasMany(models.Song, { foreignKey: 'albumID' })
    }
  }
  Album.init({
    albumName: DataTypes.STRING,
    albumCover: DataTypes.STRING,
    albumDate: DataTypes.STRING,
    artistID: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    songList: DataTypes.STRING(1234),
    profileID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};