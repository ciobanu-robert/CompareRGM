const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        profileImage: { type: String , require: true },
        email: { type: String, require: true, unique: true },
        company: { type: String, require: true, unique: true },
        description: { type: String, require: true },
        password: { type: String, require: true },
        admin: { type: Boolean, required: true },
        banned: { type: Boolean, required: true },
        notifications: [
            {
                competitorID: { type: String },
                profileImage: { type: String },
                competitor: { type: String },
            }
        ],
        competitors: [
            {
                competitorID: { type: String },
                profileImage: { type: String },
                competitor: { type: String },                
            }
        ],
        products: [
            {
                productID: { type: Number },
                name: { type: String },
                category: { type: String },
                price: { type: Number },
                size: { type: Number },
                quantity: { type: Number },
            }
        ],
        comparisonsStatistics: [
            {
                number: { type: Number },
                year: { type: Number },
            }
        ],
        competitorsStatistics: [
            {
                number: { type: Number },
                year: { type: Number },
            }
        ],
        productsStatistics: [
            {
                number: { type: Number },
                year: { type: Number },
            }
        ],
    },
    { collection: 'users' }
);

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model;