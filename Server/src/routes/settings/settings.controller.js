const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user.mongoose');
const JWT_SECRET = ')BWZY1[a$APg*{xaJ.Xky.y21XkW&#,Bjx8P!aKB@t::#K5WkR-x2Sv&BS(VL;crr#KW4vLktKjTZk03KDV6/+rR)bUr7Yj:(}$3';


async function httpSaveSettings(req, res) {
    const { 
        token, 
        newPassword, 
        newDescription, 
        newCompany,
        newImage
    } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        
        const _id = user.id;
        const _user = await User.findById(_id);

        let profileImage = '';
        let company = '';
        let description = '';
        let password = '';

        if (!newImage) {
            profileImage = _user.profileImage;
        } else {
            profileImage = newImage;
        }
        if (!newCompany) {
            company = _user.company;
        } else {
            company = newCompany;
        }
        if (!newDescription) {
            description = _user.description;
        } else {
            description = newDescription;
        }
        if (!newPassword) {
            password = _user.password;
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