const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    username: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    phone: { required: true, type: String },
    isAdmin: { default: false, type: Boolean },
    role: { required: true, type: String }
})

userSchema.methods.generateToken = async()=>{
    try {
       return jwt.sign(
        {
            isAdmin: this.isAdmin,
            role: this.role,
            email: this.email,
            userId: this._id
        },
        process.env.JWT_TOKEN,
        {
            expiresIn:'2h'
        }
       )
    } catch (error) {
        console.log(error)
    }
}

const User = new mongoose.model("User", userSchema)

module.exports = User

