const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    phone: { required: true, type: String },
    isAdmin: { default: false, type: Boolean },
    role: { required: true, type: String }
})

const User = new mongoose.model("User", userSchema)

module.exports = User

