const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    contact: {
        type: String,
    },
    password: {
        type: String,
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('users', userSchema);