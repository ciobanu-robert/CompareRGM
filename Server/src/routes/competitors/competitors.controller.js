const User = require('../../models/user.mongoose');

async function httpGetCompetitors(req, res) {

    try {
        competitors = await User.find({'__v': 0});
        res.json({ status: 'ok', data: competitors });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' })
    }
}

module.exports = httpGetCompetitors;