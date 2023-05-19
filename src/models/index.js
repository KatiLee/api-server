'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const coffee = require('./coffee');
const { database } = require('pg/lib/defaults');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// const DATABASE_URL = 

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const coffeeModel = coffee(sequelizeDatabase, DataTypes);

module.exports = {
    sequelizeDatabase,
    coffeeModel,
};