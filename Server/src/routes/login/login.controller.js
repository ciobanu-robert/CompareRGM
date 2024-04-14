const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user.mongoose');

const JWT_SECRET = ')BWZY1[a$APg*{xaJ.Xky.y21XkW&#,Bjx8P!aKB@t::#K5WkR-x2Sv&BS(VL;crr#KW4vLktKjTZk03KDV6/+rR)bUr7Yj:(}$3';

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
            }, 
            JWT_SECRET
        );

        return res.json({ status: 'ok', data: token });
    }

    res.json({ status: 'error', error: 'Invalid password'});
}

module.exports = httpGetUser;