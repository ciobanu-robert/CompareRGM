const express = require('express');
const httpSendInvite = require('./invite.controller');

const inviteRouter = express.Router();

inviteRouter.post('/', httpSendInvite);

module.exports = inviteRouter;