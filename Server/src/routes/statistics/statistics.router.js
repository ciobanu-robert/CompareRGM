const express = require('express');
const {
    httpPostProductsNumber,
    httpGetProductsNumber,
    httpGetCompetitorsNumber,
} = require('./statistics.controller');

const statisticsRouter = express.Router();

statisticsRouter.post('/post-products', httpPostProductsNumber);
statisticsRouter.post('/get-products', httpGetProductsNumber);
statisticsRouter.post('/get-competitors', httpGetCompetitorsNumber);

module.exports = statisticsRouter;