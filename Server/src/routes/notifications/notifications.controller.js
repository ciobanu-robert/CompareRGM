const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;

async function httpGetNotifications(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(_user.id);
        const notifications = user.notifications;

        res.json({ status: 'ok', data: notifications });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

async function httpDecline(req, res) {
    const { notification, token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(_user.id);
        const notifications = user.notifications;

        notifications.forEach((item, index) => {
            if (item.competitorID === notification) [
                notifications.splice(index, 1)
            ]
        })
        
        await User.findOneAndUpdate({ _id: _user.id }, {
            notifications
        });

        res.json({ status: 'ok', data: notifications });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

module.exports = {
    httpGetNotifications,
    httpDecline,
};