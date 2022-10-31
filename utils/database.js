const { Sequelize } = require("sequelize");

const database = new Sequelize(
    "postgres://postgres:testpass@database/appdb"
);

module.exports = database;