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
  ssl: true,
  dialectOptions: {
    ssl: { require: true }
  },
  logging: console.log // Add this line
});
  
  module.exports = sequelize;