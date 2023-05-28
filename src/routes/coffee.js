'use strict';

const express = require('express');

const router = express.Router();
const { coffeeModel } = require('../models');

router.get('/coffee', async (req, res, next) => {
    let coffees = await coffeeModel.findAll();
    
    res.status(200).send(coffees);
});

router.get('/coffee/:id', async (req, res, next) => {
    let singleCoffee = await coffeeModel.findAll({where: {id: req.params.id}});

    res.status(200).send(singleCoffee);
});

router.post('/coffee', async (req, res, next) => {
    let newCoffee = await coffeeModel.create(req.body);

    res.status(200).send(newCoffee);
});

module.exports = router;