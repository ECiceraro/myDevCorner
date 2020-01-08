const mongoose = require('mongoose');

// creating user schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String
})

const User = mongoose.model('User', userSchema)

// exporting the class/schema of user
module.exports = User
