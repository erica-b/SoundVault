'use strict';

const models = require('../models');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Profile.belongsToMany(models.Song, {
        through: 'ProfileSong',
        foreignKey: 'id', // Foreign key for Profile in junction table
        otherKey: 'id', // Foreign key for Album in junction table
      });

      models.Song.belongsToMany(models.Profile, {
        through: 'ProfileSong',
        foreignKey: 'id', // Foreign key for Album in junction table
        otherKey: 'id', // Foreign key for Profile in junction table
      });
    }
  }
  ProfileSong.init({
    songID: {
      type: DataTypes.INTEGER,
      references: {
        model: models.Song,
        key: "id",
      }
    },
    profileID: {
      type: DataTypes.INTEGER,
      references: {
        model: models.Profile,
        key: "id",
      }
    },
    songName: DataTypes.STRING,
    albumName: DataTypes.STRING,
    albumCover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProfileSong',
  });
  return ProfileSong;
};