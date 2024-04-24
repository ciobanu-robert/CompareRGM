const express = require('express');
const httpSaveSettings = require('./settings.controller');

const settingsRouter = express.Router();

settingsRouter.post('/', httpSaveSettings);

module.exports = settingsRouter;