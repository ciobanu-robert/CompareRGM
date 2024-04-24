const express = require('express');
const registerRouter = require('./register/register.router');
const loginRouter = require('./login/login.router');
const settingsRouter = require('./settings/settings.router');

const api = express.Router();

api.use('/register', registerRouter);
api.use('/login', loginRouter);
api.use('/save', settingsRouter);

module.exports = api;