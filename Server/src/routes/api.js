const express = require('express');
const registerRouter = require('./register/register.router');
const loginRouter = require('./login/login.router');
const settingsRouter = require('./settings/settings.router');
const profileInfoRouter = require('./profile-info/profile-info.router');
const competitorsRouter = require('./competitors/competitors.router');
const inviteRouter = require('./invite/invite.router');
const notificationsRouter = require('./notifications/notifications.router');
const productsRouter = require('./products/products.router');
const compareRouter = require('./compare/compare.router');

const api = express.Router();

api.use('/register', registerRouter);
api.use('/login', loginRouter);
api.use('/save', settingsRouter);
api.use('/profile-info', profileInfoRouter);
api.use('/competitors', competitorsRouter);
api.use('/invite', inviteRouter);
api.use('/notifications', notificationsRouter);
api.use('/products', productsRouter);
api.use('/compare', compareRouter);

module.exports = api;