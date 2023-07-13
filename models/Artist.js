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
    }
  }
  Artist.init({
    artistID: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement:true},
    artistName: DataTypes.STRING,
    artistImage: DataTypes.STRING,
    artistAge: DataTypes.INTEGER,
    genre: { 
      type: DataTypes.STRING,
      references: 
      {
        model: Genre,
        key: "genre",
      }
        }
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};