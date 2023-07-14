'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      albumID: {
        type: Sequelize.INTEGER
      },
      albumName: {
        type: Sequelize.STRING
      },
      albumCover: {
        type: Sequelize.STRING
      },
      albumYear: {
        type: Sequelize.INTEGER
      },
      artistID: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      songID: {
        type: Sequelize.INTEGER
      },
      profileID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Albums');
  }
};