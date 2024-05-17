const express = require('express');
const {
    httpPostProductsNumber,
    httpGetProductsNumber,
    httpGetCompetitorsNumber,
    httpPostComparisonsNumber,
    httpGetComparisonsNumber,
} = require('./statistics.controller');

const statisticsRouter = express.Router();

statisticsRouter.post('/post-products', httpPostProductsNumber);
statisticsRouter.post('/get-products', httpGetProductsNumber);
statisticsRouter.post('/get-competitors', httpGetCompetitorsNumber);
statisticsRouter.post('/post-comparisons', httpPostComparisonsNumber);
statisticsRouter.post('/get-comparisons', httpGetComparisonsNumber);

module.exports = statisticsRouter;