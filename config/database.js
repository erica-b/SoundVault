const {Sequelize} = require ('sequelize')
require('dotenv').config()


const dbURL = process.env.DB_URL;


const sequelize = new Sequelize(dbURL)