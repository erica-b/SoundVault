// Establish the connection to the database
const {Sequelize} = require ('sequelize')
require('dotenv').config()


const dbURL = process.env.DB_URL;


const sequelize = new Sequelize(dbURL, {
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false // You might need to set this to true depending on your PostgreSQL server setup
      }
  }
});

module.exports = sequelize;