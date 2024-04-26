const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;


async function httpSaveSettings(req, res) {
    const { 
        token, 
        newPassword, 
        newDescription, 
        newCompany,
        newImage
    } = req.body;
    try {
        const _user = jwt.verify(token, JWT_SECRET);
        
        const _id = _user.id;
        const user = await User.findById(_id);

        let profileImage = '';
        let company = '';
        let description = '';
        let password = '';

        if (!newImage) {
            profileImage = user.profileImage;
        } else {
            profileImage = newImage;
        }
        if (!newCompany) {
            company = user.company;
        } else {
            company = newCompany;
        }
        if (!newDescription) {
            description = user.description;
        } else {
            description = newDescription;
        }
        if (!newPassword) {
            password = user.password;
        } else {
            password = await bcrypt.hash(newPassword, 10);
        }


        await User.updateOne({ _id }, {
            $set: {
                profileImage,
                company,
                description,
                password, 
            }
        });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' })
    }

    res.json({ status: 'ok' })
}

module.exports = httpSaveSettings;