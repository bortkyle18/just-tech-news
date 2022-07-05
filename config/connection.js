// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// import username and password from env folder for security purposes
require('dotenv').config({path: './env/.env'});

let sequelize;

// create connection to our database, pass in your MySQL information for username and password
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    } else {
    sequelize = new Sequelize('just_tech_news_db', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
    });
}

module.exports = sequelize;