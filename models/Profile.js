'use strict';

const Album = require("./Album")
const Artist = require("./Artist")


const models = require('../models');

const {
  Model, 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsToMany(models.Album, {
        as: 'favoriteAlbums',
        through: 'ProfileAlbums',
        foreignKey: 'profileID',
        otherKey: 'albumID',
      });
     Profile.belongsToMany (models.Artist, {through: 'ProfileArtist'})
     Profile.belongsToMany (models.Song, {
      as: 'favoriteSongs',
      through: 'ProfileSongs',
      foreignKey: 'profileID',
      otherKey: 'songID'})
    }
  }
 Profile.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    songID: DataTypes.INTEGER,
    albumID: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      references: {
        model: models.Album,
        key: "id",
      }
    },

    artistID: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      references: {
        model: models.Artist,
        key: "id",
      }
    }

  }, {
    sequelize,
    modelName:  'Profile',
  });
  return Profile;
};