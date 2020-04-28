let mongoose = require('mongoose')


let userSchema = new mongoose.Schema({
    login: String,
    email: String,
    password: String
});

module.exports = mongoose.model('users', userSchema, 'users');
