const express = require('express');
const httpGetCompetitors = require('./competitors.controller');

const competitorsRouter = express.Router();

competitorsRouter.get('/', httpGetCompetitors);

module.exports = competitorsRouter;