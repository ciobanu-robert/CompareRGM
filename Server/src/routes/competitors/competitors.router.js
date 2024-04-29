const express = require('express');
const { 
    httpGetCompetitors,
    httpCoutCompetitors,
    httpGetTopCompetitors,
} = require('./competitors.controller');

const competitorsRouter = express.Router();

competitorsRouter.post('/competitors-list', httpGetCompetitors);
competitorsRouter.post('/competitors-number', httpCoutCompetitors);
competitorsRouter.post('/top-competitors', httpGetTopCompetitors);



module.exports = competitorsRouter;