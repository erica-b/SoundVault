'use strict';
const models = require('../models');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.hasMany(models.Album), {foreignKey: "id"}
      Artist.hasMany(models.Song, { foreignKey: "id"})
      // Artist.belongsToMany(models.Users, {through:"ProfileArtist"})
    }
  }
  Artist.init({
    artistName: DataTypes.STRING,
    artistImage: DataTypes.STRING,
    artistAge: DataTypes.INTEGER,
    profileID: DataTypes.INTEGER,
    albumID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};