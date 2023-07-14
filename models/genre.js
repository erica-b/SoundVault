'use strict';
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
      Genre.belongsToMany(Profile, { through: "ProfileGenre" });
      Genre.hasMany(Artist, {
        foreignKey: "artistID",
      });
      Genre.hasMany(Album, {
        foreignKey: "albumID",
      });
      Genre.hasMany(Song, { foreignKey: "songID" });
    }
  }
  Genre.init({
    genre: DataTypes.STRING,
    songID: DataTypes.INTEGER,
    artistID: DataTypes.INTEGER,
    albumID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};