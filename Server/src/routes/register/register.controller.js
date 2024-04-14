const bcrypt = require('bcryptjs');

const User = require('../../models/user.mongoose');

async function httpAddNewUser(req,res) {
    const {email, company, password: plainTextPassword} = req.body;

    const password = await bcrypt.hash(plainTextPassword, 10);
    console.log(password);
    
    try {
        await User.create({
            email,
            company,
            password,
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