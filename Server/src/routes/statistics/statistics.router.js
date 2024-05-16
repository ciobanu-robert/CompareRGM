const express = require('express');
const {
    httpPostProductsNumber,
    httpGetProductsNumber,
} = require('./statistics.controller');

const statisticsRouter = express.Router();

statisticsRouter.post('/post-products', httpPostProductsNumber);
statisticsRouter.post('/get-products', httpGetProductsNumber);


module.exports = statisticsRouter;