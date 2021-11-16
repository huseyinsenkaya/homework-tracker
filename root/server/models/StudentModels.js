const mongoose = require("mongoose");
const HomeworkStudentModel = require("./HomeworkStudentModel");
const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    default: "Student",
  },
  myHomeworks: {
    type: [HomeworkStudentModel.schema],
    default: [],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StudentModel = mongoose.model("students", studentSchema);
