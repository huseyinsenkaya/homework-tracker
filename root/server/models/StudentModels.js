const mongoose = require("mongoose");

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
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    default: "Student",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StudentModel = mongoose.model("students", studentSchema);
