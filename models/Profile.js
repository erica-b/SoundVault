'use strict';

const Album = require("./Album")
const Artist = require("./Artist")


const models = require('../models');

const {
  Model, INTEGER
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
     Profile.belongsToMany (models.Album, {through: 'ProfileAlbum'})
     Profile.belongsToMany (models.Artist, {through: 'ProfileArtist'})
     Profile.belongsToMany (models.Song, {through: 'ProfileSong'})
     Profile.belongsToMany(models.Genre, {through: "ProfileGenre"})
    }
  }
 Profile.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    albumID: {
      type: DataTypes.INTEGER,
      references: {
        model: models.Album,
        key: "albumID",
      }
    },

    artistID: {
      type: DataTypes.INTEGER,
      references: {
        model: models.Artist,
        key: "artistID",
      }
    }

  }, {
    sequelize,
    modelName:  'Profile',
  });
  return Profile;
};