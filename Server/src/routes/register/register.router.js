const express = require('express');
const httpAddNewUser = require('./register.controller');

const registerRouter = express.Router();

registerRouter.post ('/', httpAddNewUser);

module.exports = registerRouter;