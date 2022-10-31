const {
    DataTypes
} = require("sequelize");

const seq = require('../utils/database');

const Content = seq.define("Content", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement : true,
    },
    subject: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Content;