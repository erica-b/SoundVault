'use strict';

// When running the seeder command it needs to be name of Database table and not the models files! 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Songs', [{
    artistID: 1,
    profileID: 1,
    albumID: 1,
    createdAt: new Date(),
    updatedAt: new Date() 
  }]);
},
down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Songs', null, {});
  }
};
