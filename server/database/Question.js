const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  languageId: { type: String, required: true } 
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question
