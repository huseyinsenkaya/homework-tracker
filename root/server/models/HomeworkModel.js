const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacherId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = HomeworkModel = mongoose.model("homeworks", homeworkSchema);
