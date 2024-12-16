const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    username: { required: true, type: String },
    email: { required: true, type: String },
    message: { required: true, type: String },
    phone: { required: true, type: String },
})

const Contact = new mongoose.model("Contact", contactSchema)

module.exports = Contact