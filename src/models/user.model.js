const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db/db');


class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    handle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 24]
        }
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 24]
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    pfp: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    followingCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    followerCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

}, {sequelize: db})

module.exports = User
