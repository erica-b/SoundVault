const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbURL = process.env.DB_URL;

const sequelize = new Sequelize(dbURL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This is the key line for enforcing SSL
      rejectUnauthorized: false // Disable validation of the SSL certificate
    }
  }
});

module.exports = sequelize;