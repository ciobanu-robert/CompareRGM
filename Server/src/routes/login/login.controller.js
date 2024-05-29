const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');

const JWT_SECRET = process.env.JWT_SECRET;

async function httpGetUser(req, res) {
    const { email, password } = req.body; 
    const user = await User.findOne({ email }).lean();

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid email' });
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ 
                id: user._id, 
                email: user.email,
                admin: user.admin,
                banned: user.banned,
            }, 
            JWT_SECRET
        );

        return res.json({ status: 'ok', data: token });
    }

    res.json({ status: 'error', error: 'Invalid password'});
}

module.exports = httpGetUser;