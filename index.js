'use strict';

require('dotenv').config();
const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');
const PORT = process.env.PORT || 5008;

sequelizeDatabase.sync()
    .then(() => {
        console.log('seeking successful connection');
        start(PORT);
    })
    .catch(e => console.error(e));