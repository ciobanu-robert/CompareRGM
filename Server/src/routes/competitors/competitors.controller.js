const jwt = require('jsonwebtoken');
require('dotenv').config();
ObjectID = require('mongoose').ObjectID;

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;


async function httpGetCompetitors(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(_user.id);
        const negateUsers = [_user.id];
        const competitorsInvites = await User.find();

        for (let notification of user.notifications) {
            negateUsers.push(notification.competitorID);
        }

        const competitors = await User.find({_id: {'$nin': negateUsers}}).select({
            password: 0,
            notifications: 0,
            competitors: 0,
        });

        res.json({ status: 'ok', data: competitors });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' })
    }
}

module.exports = httpGetCompetitors;