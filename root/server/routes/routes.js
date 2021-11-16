const router = require("express").Router();

const StudentModel = require("../models/StudentModels");
const TeacherModel = require("../models/TeacherModel");
const PrincipalModel = require("../models/PrincipalModel");
const HomeworkModel = require("../models/HomeworkModel");

// Add Student
router.post("/add-student", (req, res) => {
  const addedStudent = new StudentModel({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    teacher: req.body.teacher,
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
    homeworks: req.body.homeworks,
    students: req.body.students,
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

// Add Homework
router.post("/add-homework", (req, res) => {
  const enteredHomework = new HomeworkModel({
    title: req.body.title,
    description: req.body.description,
    teacher: req.body.teacher,
  });
  console.log(enteredHomework);
  TeacherModel.findOneAndUpdate(
    { fullName: enteredHomework.teacher },
    { $push: { homeworks: enteredHomework } },
    (err, info) => {
      if (err) {
        res.sendStatus(400);
      } else {
        -res.sendStatus(200);
      }
    }
  );
});

// Remove Teacher
router.post("/remove-teacher", (req, res) => {
  const removedTeacherID = req.body.id;
  TeacherModel.findByIdAndDelete(removedTeacherID, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Remove Student
router.post("/remove-student", (req, res) => {
  const removedStudentID = req.body.id;
  StudentModel.findByIdAndDelete(removedStudentID, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
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

// Assignments
router.get("/assignments", (req, res) => {
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

//List all Principals
router.get("/all-principals", (req, res) => {
  PrincipalModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
