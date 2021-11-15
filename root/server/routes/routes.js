const router = require("express").Router();

const StudentModel = require("../models/StudentModels");
const TeacherModel = require("../models/TeacherModel");

// Add Student
router.post("/add-student", (req, res) => {
  const addedStudent = new StudentModel({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  addedStudent
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add Teacher
router.post("/add-teacher", (req, res) => {
  const addedTeacher = new TeacherModel({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    homeworks:req.body.homeworks,
    students:req.body.students,
  });
  addedTeacher
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//List all Students
router.get("/all-students", (req, res) => {
  StudentModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//List all Teacher
router.get("/all-teachers", (req, res) => {
  TeacherModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
