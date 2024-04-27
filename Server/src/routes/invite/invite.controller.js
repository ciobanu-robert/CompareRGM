const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;

async function httpSendInvite(req, res) {
    const { competitor, token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(_user.id);
        const _competitor = await User.findById(competitor);
        const notifications = [{
            competitorID: user._id,
            profileImage: user.profileImage,
            competitor: user.company,
        }];

        for (let notification of _competitor.notifications) {
            for(let newNotification of notifications) {
                if (newNotification.competitorID == notification.competitorID) {
                    return res.json({ 
                        status: 'error', 
                        error: `You just send an invite to ${_user.company}. Please wait for their response.` 
                    });
                }
            }
        }
        
        notifications.push(..._competitor.notifications);

        await User.findOneAndUpdate({ _id: competitor }, {
                notifications
        });

        res.json({ status: 'ok'});
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

module.exports = httpSendInvite;