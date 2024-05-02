const express = require('express');
const {
    httpSaveProducts,
    httpGetProducts,
    httpCountProducts,
    httpGetProductsPrices,
} = require('./products.controller');

const productsRouter = express.Router();

productsRouter.post('/save', httpSaveProducts);
productsRouter.post('/get-products', httpGetProducts);
productsRouter.post('/count-products', httpCountProducts);
productsRouter.post('/products-prices', httpGetProductsPrices);


module.exports = productsRouter;