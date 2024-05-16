const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;


async function httpPostProductsNumber(req, res) {
    const { token, productsNumber } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const _id = _user.id;
        const user = await User.findById(_id);
        const products = productsNumber - user.products.length;
        const year = new Date().getFullYear();
        let existsYear = false;
        
        for (let statistics of user.productsStatistics) {
            if (statistics.year === year) {
                statistics.number += products;
                existsYear = true;
            }
        }

        if (existsYear === false ) {
            user.productsStatistics.push({
                number: productsNumber,
                year: year,
            });
        }

        await User.findByIdAndUpdate(_id, {
            productsStatistics: user.productsStatistics,
        });

        res.json({ status: 'ok' });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

async function httpGetProductsNumber(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(_user.id);
        const statistics = user.productsStatistics;

        res.json({ status: 'ok', data: statistics });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

module.exports = {
    httpPostProductsNumber,
    httpGetProductsNumber,
};