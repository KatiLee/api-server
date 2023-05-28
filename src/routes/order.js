'use strict';

const express = require('express');
const { orderModel } = require('../models');
const router = express.Router();

router.get('/order', async (req, res, next) => {
    const orders = await orderModel.findAll();
    res.status(200).send(orders);
});

router.get('/order/:id', async (req, res, next) => {
    const singleOrder = await orderModel.findByPk(req.params.id);
    res.status(200).send(singleOrder);
});

router.post('/order', async (req, res, next) => {
    const newOrder = await orderModel.create(req.body);
    res.status(200).send(newOrder);
});

router.put('/order/:id', async (req, res, next) => {
    await orderModel.update(req.body, {where: {id: req.params.id}});
    const updatedOrder = await orderModel.findByPk(req.params.id);
    res.status(200).send(updatedOrder);
});

router.delete('/order/:id', async (req, res, next) => {
    try {
     const deletedOrder = await orderModel.findByPk(req.params.id);
    await orderModel.destroy({where: {id: req.params.id}});
    res.status(200).send(deletedOrder);
} catch(e){
    next(e);
}   
});

module.exports = router;