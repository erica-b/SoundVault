"use strict";
const { Model } = require("sequelize");
const Genre = require("./Genre");
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
  Artist.init(
    {
      artistID: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      artistName: DataTypes.STRING,
      artistImage: DataTypes.STRING,
      artistAge: DataTypes.INTEGER,
      genre: {
        type: DataTypes.STRING,
        references: {
          model: Genre,
          key: "genre",
        },
      },
      songID: {
        type: DataTypes.INTEGER,
        references: {
          model: Song,
          key: "songID",
        },
      },
      profileID: {
        type: DataTypes.INTEGER,
        references: {
          model: Profile,
          key: "profileID",
        },
      },

      albumID: {
        type: DataTypes.INTEGER,
        references: {
          model: Album,
          key: "albumID",
        },
      },
    },
    {
      sequelize,
      modelName: "Artist",
    }
  );
  return Artist;
};
