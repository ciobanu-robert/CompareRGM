const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;


async function httpGetProfileImage(req, res) {
    const { token } = req.body;
    try {
        const _user = jwt.verify(token, JWT_SECRET);
        
        const _id = _user.id;
        const user = await User.findById(_id);
        const image = user.profileImage;

        res.json({ status: 'ok', data: image})
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' })
    }
}

async function httpGetProfileCompany(req, res) {
    const { token } = req.body;
    try {
        const _user = jwt.verify(token, JWT_SECRET);
        
        const _id = _user.id;
        const user = await User.findById(_id);
        const company = user.company;

        res.json({ status: 'ok', data: company})
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' })
    }
}

async function httpGetProfileEmail(req, res) {
    const { token } = req.body;
    try {
        const _user = jwt.verify(token, JWT_SECRET);
        
        const _id = _user.id;
        const user = await User.findById(_id);
        const email = user.email;

        res.json({ status: 'ok', data: email})
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' })
    }
}

module.exports = { 
    httpGetProfileImage, 
    httpGetProfileCompany,
    httpGetProfileEmail,
};