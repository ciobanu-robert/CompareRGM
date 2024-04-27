const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;


async function httpGetCompetitors(req, res) {
    const { token } = req.body;

    try {
        const user = jwt.verify(token, JWT_SECRET);

        competitors = await User.find({_id: {$ne: user.id}}).select({
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