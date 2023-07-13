'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany (Album, {through: 'UserAlbum'})
      User.belongsToMany (Artist, {through: 'UserArtist'})
      User.belongsToMany (Song, {through: 'UserSong'})
    }
  }
  User.init({
    userID: { type: DataTypes.INTEGER, unique: true, primaryKey:true, autoIncrement:true},
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    albumID: {
      type: DataTypes.INTEGER,
      references: {
        model: Album,
        key: "albumID",
      }
    },

    artistID: {
      type: DataTypes.INTEGER,
      references: {
        model: Artist,
        key: "artistID",
      }
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};