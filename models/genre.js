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
    }
  }
  Genre.init({
    genre: {type:DataTypes.STRING, unique:true, primaryKey:true},
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,

    songID: { 
      type: DataTypes.INTEGER,
      references: {
        model: Song,
        key: "songID"
      }
    },
    artistID: {
      type: DataTypes.STRING,
      references: {
        model: Artist,
        key: "artistID",
      }
    },
    albumID: {
      type: DataTypes.INTEGER,
      references: {
        model: Album,
        key: "albumID",
      }
    },
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};