import { useState, useEffect } from "react";

import StudentList from '../components/students/StudentList'
import classes from './AllStudents.module.css'

function AllStudents() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedStudents, setLoadedStudents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/all-students")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedStudents(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.container}>
      <h1>All Students</h1>
      <StudentList students={loadedStudents} />
    </section>
  );
}

export default AllStudents;
