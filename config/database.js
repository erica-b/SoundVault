// Establish the connection to the database
const {Sequelize} = require ('sequelize')
require('dotenv').config()


const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });
  
  module.exports = sequelize;