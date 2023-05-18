'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
    return sequelizeDatabase.define('coffees', {
        drink: {
            type: DataTypes.STRING,
            allowNull: false
        },
        milk: {
            type: DataTypes.ENUM,
            values: ['Whole', 'Skim', 'Almond', 'Oat'],
            allowNull: false
        },
        flavor: {
            type: DataTypes.ENUM,
            values: ['Chocolate', 'White Chocolate', 'Carmel', 'Vanilla'],
            allowNull: true
        },
    });
};