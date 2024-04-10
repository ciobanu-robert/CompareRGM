const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../../models/user.mongoose');

async function httpAddNewUser(req,res) {
    const {email, company, password} = req.body;

    const pass = bcrypt.hash(password, 10);
    
    try {
        await User.create({
            email,
            company,
            pass,
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
        
    res.json({ status: 'ok' })
};

module.exports = httpAddNewUser;