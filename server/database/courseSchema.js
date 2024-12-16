const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: { type: String, required: true },
  courseDescription: { type: String, required: true },
  courseInstructor: { type: String, required: true },
  coursePrice: { type: Number, required: true },
  courseImage: { type: String, required: true },
  courseDuration: { type: String, required: true },
  courseEnrolledStudents: { type: Number, required: true },
  courseCreatedAt: { type: String, required: true },
  teacherId:{ type: String, required:true}

});

const Course = new mongoose.model("Course", courseSchema);

module.exports = Course;
