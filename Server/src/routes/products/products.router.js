const express = require('express');
const {
    httpSaveProducts,
    httpGetProducts,
} = require('./products.controller');

const productsRouter = express.Router();

productsRouter.post('/save', httpSaveProducts);
productsRouter.post('/get-products', httpGetProducts);


module.exports = productsRouter;