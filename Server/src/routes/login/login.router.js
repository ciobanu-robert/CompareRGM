const express = require('express');
const httpGetUser = require('./login.controller');

const loginRouter = express.Router();

loginRouter.post ('/', httpGetUser);

module.exports = loginRouter;