'use strict';
const models = require('.');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Profile, { through: "ProfileGenre" });
      Genre.hasMany(models.Artist, {
        foreignKey: "artistID",
      });
      Genre.hasMany(models.Album, {
        foreignKey: "albumID",
      });
      Genre.hasMany(models.Song, { foreignKey: "songID" });
    }
  }
  Genre.init({
    genreName: DataTypes.STRING,
    songID: DataTypes.INTEGER,
    artistID: DataTypes.INTEGER,
    albumID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};