'use strict';
const {
  Model
} = require('sequelize');
const User = require('./User');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsToMany(User, {through:"UserAlbum"})
    }
  }
  Album.init({
    albumID: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement:true},
    albumName: DataTypes.STRING,
    albumCover : DataTypes.STRING,
    albumYear: DataTypes.INTEGER,
    artistID: {
      type: DataTypes.STRING,
      references: {
        model: Artist,
        key: "artistID",
      }
    },
    genre: { 
      type: DataTypes.STRING,
      references: {
        model: Genre,
        key: "genre",
      }
    },
    songID: { 
      type: DataTypes.INTEGER,
      references: {
        model: Song,
        key: "songID"
      }
    },
    userID: { 
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userID"
      }
    },


  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};