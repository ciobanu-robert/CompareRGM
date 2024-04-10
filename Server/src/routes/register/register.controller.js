const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../../models/user.mongoose');

async function httpAddNewUser(req,res) {
    const {email, company, password} = req.body;

        const pass = bcrypt.hash(password, 10);
    
        try {
            const response = await User.create({
                email,
                company,
                pass,
            });
            console.log('User created successfuly: ', response);
        } catch (error) {
            console.log(error);
            return res.json({ status: 'error' })
    }
        
    res.json({ status: 'ok' })
};

module.exports = httpAddNewUser;