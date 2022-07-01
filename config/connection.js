// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// import username and password from env folder for security purposes
require('dotenv').config({path: './env/.env'});

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;