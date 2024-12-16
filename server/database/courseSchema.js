const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    username: { required: true, type: String },
    email: { required: true, type: String },
    message: { required: true, type: String },
    phone: { required: true, type: String },
})

const Course = new mongoose.model("Course", courseSchema)

module.exports = Contact