const { Sequelize } = require('sequelize');
require('dotenv').config();

const databaseName = 'sufdxojz'; // Replace with your actual database name
const databaseURL = process.env.DATABASE_URL || `postgres://localhost:5433/${databaseName}`;

const sequelize = new Sequelize(databaseURL, {
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DATABASE_URL ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
});

module.exports = sequelize;