const express = require('express');
const registerRouter = require('./register/register.router');
const loginRouter = require('./login/login.router');
const settingsRouter = require('./settings/settings.router');
const profileInfoRouter = require('./profile-info/profile-info.router');

const api = express.Router();

api.use('/register', registerRouter);
api.use('/login', loginRouter);
api.use('/save', settingsRouter);
api.use('/profile-info', profileInfoRouter);


module.exports = api;