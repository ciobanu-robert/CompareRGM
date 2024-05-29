const express = require('express');
const registerRouter = require('./register/register.router');
const loginRouter = require('./login/login.router');
const settingsRouter = require('./settings/settings.router');
const profileInfoRouter = require('./profile-info/profile-info.router');
const competitorsRouter = require('./competitors/competitors.router');
const inviteRouter = require('./invite/invite.router');
const notificationsRouter = require('./notifications/notifications.router');
const productsRouter = require('./products/products.router');
const statisticsRouter = require('./statistics/statistics.router');
const adminRouter = require('./admin/admin.router');

const api = express.Router();

api.use('/register', registerRouter);
api.use('/login', loginRouter);
api.use('/save', settingsRouter);
api.use('/profile-info', profileInfoRouter);
api.use('/competitors', competitorsRouter);
api.use('/invite', inviteRouter);
api.use('/notifications', notificationsRouter);
api.use('/products', productsRouter);
api.use('/statistics', statisticsRouter);
api.use('/admin', adminRouter);


module.exports = api;