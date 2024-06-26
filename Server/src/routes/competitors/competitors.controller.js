const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;


async function httpGetCompetitors(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(_user.id);
        const negateUsers = [_user.id];

        for (let notification of user.notifications) {
            negateUsers.push(notification.competitorID);
        }
        for (let competitor of user.competitors) {
            negateUsers.push(competitor.competitorID);
        }

        const competitorsList = await User.find({
            _id: {'$nin': negateUsers}, 
            admin: {'$ne': true}})
            .select({
                password: 0,
                notifications: 0,
                competitors: 0,
                products: 0,
                admin: 0,
                banned: 0,
                comparisonsStatistics: 0,
                competitorsStatistics: 0,
                productsStatistics: 0,
                __v: 0,
            });

        res.json({ status: 'ok', data: competitorsList });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' });
    }
}

async function httpCoutCompetitors(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(_user.id);
    
        res.json({ status: 'ok', data: user.competitors.length })
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' });
    }
}

async function httpGetTopCompetitors(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(_user.id);

        const topCompetitors = user.competitors.slice(0, 4);
    
        res.json({ status: 'ok', data: topCompetitors })
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' });
    }
}

async function httpGetCompetitorsData(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(_user.id);

        let competitorsData = [];
        for (let competitor of user.competitors) {
            let competitorData = await User.findById(competitor.competitorID).select({
                profileImage: 0,
                email: 0,
                description: 0,
                password: 0,
                notifications: 0,
                competitors: 0,
                __v: 0
            });
            
            competitorsData.push(competitorData);
        }

        res.json({ status: 'ok', data: competitorsData })
    } catch {
        res.json({ staus: 'error', error: 'Something went wrong' });
    }
}

module.exports = {
    httpGetCompetitors,
    httpCoutCompetitors,
    httpGetTopCompetitors,
    httpGetCompetitorsData,
};