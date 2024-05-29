const bcrypt = require('bcryptjs');

const User = require('../../models/user.mongoose');

async function httpAddNewUser(req,res) {
    const {email, company, password: plainTextPassword} = req.body;

    const password = await bcrypt.hash(plainTextPassword, 10);
    console.log(password);
    
    const profileImage = '';
    const description = '';
    const admin = false;
    const banned = false;

    try {
        await User.create({
            profileImage,
            email,
            company,
            description,
            password,
            admin,
            banned,
        });
    } catch (error) {
        if (error.code === 11000  && error.keyPattern.email === 1) {
            console.log(error);
            return res.json({ status: 'error', error: 'Email already in use.' });
        } else if (error.code === 11000  && error.keyPattern.company === 1) {
            console.log(error);
            return res.json({ status: 'error', error: 'Company name already in use.' });
        }

        throw error;
    }
        
    res.json({ status: 'ok' });
};

module.exports = httpAddNewUser;