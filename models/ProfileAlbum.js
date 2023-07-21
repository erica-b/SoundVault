'use strict';

const models = require('../models');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileAlbum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Profile.belongsToMany(models.Album, {
        through: 'ProfileAlbum',
        foreignKey: 'id', // Foreign key for Profile in junction table
        otherKey: 'id', // Foreign key for Album in junction table
      });

      models.Album.belongsToMany(models.Profile, {
        through: 'ProfileAlbum',
        foreignKey: 'id', // Foreign key for Album in junction table
        otherKey: 'id', // Foreign key for Profile in junction table
      });
    }
  }
  ProfileAlbum.init({
    albumID: {
      type: DataTypes.INTEGER,
      references: {
        model: models.Album,
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
    albumName: DataTypes.STRING,
    albumCover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProfileAlbum',
  });
  return ProfileAlbum;
};