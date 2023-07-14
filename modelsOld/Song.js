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
    songID: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement:true},
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
    profileID: { 
      type: DataTypes.INTEGER,
      references: {
        model: Profile,
        key: "profileID"
      }
    },
    albumID: { 
      type: DataTypes.INTEGER,
      references: {
        model: Album,
        key: "albumID"
      }
    },


  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};