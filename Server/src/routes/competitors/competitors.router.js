const express = require('express');
const httpGetCompetitors = require('./competitors.controller');

const competitorsRouter = express.Router();

competitorsRouter.post('/', httpGetCompetitors);

module.exports = competitorsRouter;