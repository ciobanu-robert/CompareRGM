const express = require('express');
const { 
    httpGetProfileImage,
    httpGetProfileCompany,
} = require('./profile-info.controller');

const profileInfoRouter = express.Router();

profileInfoRouter.post('/image', httpGetProfileImage);
profileInfoRouter.post('/company', httpGetProfileCompany)

module.exports = profileInfoRouter;