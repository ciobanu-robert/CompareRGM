const express = require('express');
const {
    httpGetUsers,
    httpChangeAdmin,
    httpChangeBan,
} = require('./admin.controller');

const adminRouter = express.Router();

adminRouter.post('/users-list', httpGetUsers);
adminRouter.post('/change-admin', httpChangeAdmin);
adminRouter.post('/change-ban', httpChangeBan);


module.exports = adminRouter;