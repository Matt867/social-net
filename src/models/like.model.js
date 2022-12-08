const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db/db');

class Like extends Model {};

Like.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {sequelize: db})

module.exports = Like
