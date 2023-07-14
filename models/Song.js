'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsToMany (Profile, {through: 'ProfileSong'})
      Song.belongsTo(Album)
      Song.belongsTo(Artist)
      Song.belongsTo(Genre)
    }
  }
  Song.init({
    songID: DataTypes.INTEGER,
    artistID: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    profileID: DataTypes.INTEGER,
    albumID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};