const express = require('express');
const httpGetProfileImage = require('./profile-info.controller');

const profileInfoRouter = express.Router();

profileInfoRouter.post('/image', httpGetProfileImage);

module.exports = profileInfoRouter;