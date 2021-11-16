import { useState, useEffect } from "react";
import classes from "./MyStudents.module.css";
import MyStudentsList from "../components/MyStudents/MyStudentsList";

function MyStudents() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-teachers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeachers(data);
      });
  }, []);
  return (
    <section className={classes.container}>
      <h1>All Teachers</h1>
      {teachers.length !== 0 && <MyStudentsList teachers={teachers} />}
    </section>
  );
}

export default MyStudents;
