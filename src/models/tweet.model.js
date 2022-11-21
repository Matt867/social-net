const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db/db');
const User = require('./user.model')

class Tweet extends Model {};

Tweet.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    content: {
        type: DataTypes.STRING(240),
        allowNull: false,
    },

    likeCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    commentCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    retweetCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    impressionScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }

}, { sequelize: db })

module.exports = Tweet
