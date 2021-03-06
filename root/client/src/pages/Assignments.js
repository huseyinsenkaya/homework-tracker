import { useState, useEffect } from "react";
import classes from "./Assignments.module.css";
import AssignmentsList from "../components/assignments/AssignmentsList";
function Assignments() {
  const [homeworks, setHomeworks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-teachers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHomeworks(data);
      });
  }, []);

  return (
    <section className={classes.container}>
      <h1>All Teachers</h1>
      {homeworks.length !== 0 && <AssignmentsList homeworks={homeworks} />}
    </section>
  );
}

export default Assignments;
