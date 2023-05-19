'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
// const { DESCRIBE } = require('sequelize/types/query-types');
const request = supertest(app);

beforeAll(async() => {
    await sequelizeDatabase.sync();
});

afterAll(async() => {
    await sequelizeDatabase.drop();
});

describe('Coffee routes', () => {
    test('create a coffee', async() => {
        let response = await request.post('/coffee').send({
           drink: 'latte',
            milk: 'oat',
            flavor: 'vanilla',
        });
        expect(response.status).toEqual(200);
        expect(response.body.drink).toEqual('latte');
        expect(response.body.milk).toEqual('oat');
    });
});