const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        profileImage: { type: String , require: true },
        email: { type: String, require: true, unique: true },
        company: { type: String, require: true, unique: true },
        description: { type: String, require: true },
        password: { type: String, require: true },
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
    },
    { collection: 'users' }
);

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model;