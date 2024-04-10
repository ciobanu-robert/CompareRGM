const express = require('express');
const registerRouter = require('./register/register.router');

const api = express.Router();

api.use('/register', registerRouter);

module.exports = api;