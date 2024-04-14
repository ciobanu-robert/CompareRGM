const express = require('express');
const registerRouter = require('./register/register.router');
const loginRouter = require('./login/login.router');

const api = express.Router();

api.use('/register', registerRouter);
api.use('/login', loginRouter);

module.exports = api;