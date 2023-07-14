'use strict';
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
      Artist.hasMany(Album), {foreignKey: "albumID"}
      Artist.hasMany(Song, { foreignKey: "songID"})
      Artist.belongsToMany(Users, {through:"ProfileArtist"})
      Artist.belongsTo(Genre)
    }
  }
  Artist.init({
    artistID: DataTypes.INTEGER,
    artistName: DataTypes.STRING,
    artistImage: DataTypes.STRING,
    artistAge: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    songID: DataTypes.STRING,
    profileID: DataTypes.INTEGER,
    albumID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};