const {
    Sequelize,
    DataTypes
} = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        require : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
        require : true,
    },
})

module.exports =  User;