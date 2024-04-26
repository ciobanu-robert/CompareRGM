const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user.mongoose');
const JWT_SECRET = ')BWZY1[a$APg*{xaJ.Xky.y21XkW&#,Bjx8P!aKB@t::#K5WkR-x2Sv&BS(VL;crr#KW4vLktKjTZk03KDV6/+rR)bUr7Yj:(}$3';


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

module.exports = { 
    httpGetProfileImage, 
    httpGetProfileCompany 
};