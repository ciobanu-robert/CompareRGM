const express = require('express');
const { 
    httpGetProfileImage,
    httpGetProfileCompany,
    httpGetProfileEmail,
} = require('./profile-info.controller');

const profileInfoRouter = express.Router();

profileInfoRouter.post('/image', httpGetProfileImage);
profileInfoRouter.post('/company', httpGetProfileCompany)
profileInfoRouter.post('/email', httpGetProfileEmail)


module.exports = profileInfoRouter;