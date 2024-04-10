const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        email: {type: String, require: true, unique: true},
        company: {type: String, require: true, unique: true},
        password: {type: String, require: true},
    },
    { collection: 'users' }
);

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model;