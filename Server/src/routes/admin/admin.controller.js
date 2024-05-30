const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user.mongoose');
const JWT_SECRET = process.env.JWT_SECRET;


async function httpGetUsers(req, res) {
    const { token } = req.body;

    try {
        const _user = jwt.verify(token, JWT_SECRET);

        const competitorsList = await User.find({_id: {'$ne': _user.id}}).select({
            description: 0,
            password: 0,
            notifications: 0,
            competitors: 0,
            comparisonsStatistics: 0,
            competitorsStatistics: 0,
            productsStatistics: 0,
            __v: 0,
        });

        res.json({ status: 'ok', data: competitorsList });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' });
    }
}

async function httpChangeAdmin(req, res) {
    const { user } = req.body;

    try {
        await User.findByIdAndUpdate(user._id, {
            admin: user.admin,
        });

        res.json({ status: 'ok'});
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' });
    }
}

async function httpChangeBan(req, res) {
    const { user } = req.body;

    try {
        await User.findByIdAndUpdate(user._id, {
            banned: user.banned,
        });

        res.json({ status: 'ok'});
    } catch {
        res.json({ status: 'error', error: 'Something went wrong' });
    }
}

async function httpSaveProducts(req, res) {
    const { id, products, productsNumber } = req.body;
    
    try {
        const user = await User.findById(id);
        const productsNr = productsNumber - user.products.length;
        const year = new Date().getFullYear();
        let existsYear = false;
        
        for (let statistics of user.productsStatistics) {
            if (statistics.year === year) {
                statistics.number += productsNr;
                existsYear = true;
            }
        }

        if (existsYear === false ) {
            user.productsStatistics.push({
                number: productsNumber,
                year: year,
            });
        }

        await User.findByIdAndUpdate(id, {
            products,
            productsStatistics: user.productsStatistics,
        });

        res.json({ status: 'ok' });
    } catch {
        res.json({ status: 'error', error: 'Something went wrong.' });
    }
}

module.exports = {
    httpGetUsers,
    httpChangeAdmin,
    httpChangeBan,
    httpSaveProducts,
};