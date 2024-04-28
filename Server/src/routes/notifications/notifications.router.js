const express = require('express');
const httpGetNotifications = require('./notifications.controller');

const notificationsRouter = express.Router();

notificationsRouter.post('/', httpGetNotifications);

module.exports = notificationsRouter;