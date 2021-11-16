const StudentModel = require("./StudentModels");
const HomeworkModel = require("./HomeworkModel");

const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
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
    default: "Teacher",
  },
  homeworks: {
    type: [HomeworkModel.schema],
    default: undefined,
  },
  students: {
    type: [StudentModel.schema],
    default: undefined,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = TeacherModel = mongoose.model("teachers", teacherSchema);
