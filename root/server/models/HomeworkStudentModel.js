const mongoose = require("mongoose");

const homeworkStudentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = HomeworkStudentModel = mongoose.model("homeworkStudents", homeworkStudentSchema);
