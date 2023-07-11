// Establish the connection to the database
const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize('sufdxojz', 'sufdxojz', 'yF9ZmfMfLbKMetDBSPa5x1kX7xZA1WtB', {
    host: 'rajje.db.elephantsql.com',
    dialect: 'postgres'
  });
  
  module.exports = sequelize;