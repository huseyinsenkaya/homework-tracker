import { useState, useEffect } from "react";
import classes from "./HomeworksStudent.module.css";
import HomeWorksStudentList from "../components/homeworkStudent/HomeWorksStudentList";

function HomeworksStudent() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-students")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      });
  }, []);
  return (
    <section className={classes.container}>
      <h1>My Homeworks</h1>
      {students.length !== 0 && <HomeWorksStudentList students={students} />}
    </section>
  );
}

export default HomeworksStudent;
