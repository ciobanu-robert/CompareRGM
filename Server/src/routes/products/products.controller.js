const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;

async function httpSaveProducts(req, res) {
    const { token, products } = req.body;
    
    try {
        const _user = jwt.verify(token, JWT_SECRET);

        await User.findOneAndUpdate({_id: _user.id}, {
            products
        });

        res.json({ status: 'ok' });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

async function httpGetProducts(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(_user.id);
        console.log(user);

        const products = user.products;
        console.log(products);
        
        res.json({ status: 'ok', data: user.products })
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

module.exports = {
    httpSaveProducts,
    httpGetProducts,
};