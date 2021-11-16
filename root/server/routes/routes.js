const router = require("express").Router();

const StudentModel = require("../models/StudentModels");
const TeacherModel = require("../models/TeacherModel");
const PrincipalModel = require("../models/PrincipalModel");
const HomeworkModel = require("../models/HomeworkModel");
const HomeworkStudentModel = require("../models/HomeworkStudentModel");

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
  TeacherModel.findOneAndUpdate(
    { fullName: addedStudent.teacher },
    { $push: { students: addedStudent } },
    (err, info) => {
      if (err) {
        console.log("Cannot added student to teacher.students field");
      }
    }
  );
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
    teacherId: req.body.teacherId,
  });
  console.log(enteredHomework);
  TeacherModel.findOneAndUpdate(
    { _id: enteredHomework.teacherId },
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

// Add HomeworkStudent
router.post("/add-homeworkStudent/:id", (req, res) => {
  const enteredHomeworkStudent = new HomeworkStudentModel({
    title: req.body.title,
    image: req.body.image,
  });
  const studentID = req.params.id;
  
  StudentModel.findOneAndUpdate(
    { _id: studentID },
    { $push: { myHomeworks: enteredHomeworkStudent } },
    (err, info) => {
      if (err) {
        res.sendStatus(400);
        console.log(err);
      } else {
        const teacherName = info.teacher;
        TeacherModel.findOne(
          { fullName: teacherName },
          (err, foundStudents) => {
            if (err) {
              console.log("Cannot added student to teacher.students field");
            } else {
              const idx = foundStudents.students
                .map((item) => item.id)
                .indexOf(studentID);

              if (idx !== -1) {
                const studentObject = foundStudents.students[idx];
                studentObject.myHomeworks.push(enteredHomeworkStudent);
                // save the doc
                foundStudents.save(function (error) {
                  if (error) {
                    console.log(error);
                    res.send(null, 500);
                  } else {
                    // send the records
                    res.send(info);
                  }
                });
              } else {
                res.sendStatus(200);
              }
            }
          }
        );
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
  StudentModel.findByIdAndDelete(removedStudentID, (err, removedStudent) => {
    if (err) {
      console.log(err);
    } else {
      TeacherModel.findOne(
        { fullName: removedStudent.teacher },
        (err, info) => {
          if (err) {
            console.log(err);
          } else {
            // find the deleted student id from the teacher object
            const idx = info.students
              .map((item) => item.id)
              .indexOf(removedStudentID);

            if (idx !== -1) {
              // removed from the array
              info.students.splice(idx, 1);
              // save the doc
              info.save(function (error) {
                if (error) {
                  console.log(error);
                  res.send(null, 500);
                } else {
                  // send the records
                  res.send(info);
                }
              });
            }
            // stop here, otherwise 404
            return;
          }
        }
      );
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
