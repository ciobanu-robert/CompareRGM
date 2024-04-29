const express = require('express');
const { 
    httpGetNotifications,
    httpAccept,
    httpDecline
} = require('./notifications.controller');

const notificationsRouter = express.Router();

notificationsRouter.post('/get-notifications', httpGetNotifications);
notificationsRouter.post('/accept', httpAccept);
notificationsRouter.post('/decline', httpDecline);

module.exports = notificationsRouter;