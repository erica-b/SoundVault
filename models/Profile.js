'use strict';
const Album = require("./Album")
const Artist = require("./Artist")

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
     Profile.belongsToMany (Album, {through: 'ProfileAlbum'})
     Profile.belongsToMany (Artist, {through: 'ProfileArtist'})
     Profile.belongsToMany (Song, {through: 'ProfileSong'})
     Profile.belongsToMany(Genre, {through: "ProfileGenre"})
    }
  }
 Profile.init({
    profileID: { type: DataTypes.INTEGER, unique: true, primaryKey:true, autoIncrement:true},
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    albumID: {
      type: DataTypes.INTEGER,
      references: {
        model: Album,
        key: "albumID",
      }
    },

    artistID: {
      type: DataTypes.INTEGER,
      references: {
        model: Artist,
        key: "artistID",
      }
    }

  }, {
    sequelize,
    modelName:  'Profile',
  });
  return Profile;
};