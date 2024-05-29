const express = require('express');
const { 
    httpGetCompetitors,
    httpCoutCompetitors,
    httpGetTopCompetitors,
    httpGetCompetitorsData
} = require('./competitors.controller');

const competitorsRouter = express.Router();

competitorsRouter.post('/competitors-list', httpGetCompetitors);
competitorsRouter.post('/competitors-number', httpCoutCompetitors);
competitorsRouter.post('/top-competitors', httpGetTopCompetitors);
competitorsRouter.post('/competitors-data', httpGetCompetitorsData);

module.exports = competitorsRouter;