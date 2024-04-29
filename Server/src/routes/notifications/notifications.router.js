const express = require('express');
const { 
    httpGetNotifications,
    httpDecline
} = require('./notifications.controller');

const notificationsRouter = express.Router();

notificationsRouter.post('/get-notifications', httpGetNotifications);
notificationsRouter.post('/decline', httpDecline)

module.exports = notificationsRouter;