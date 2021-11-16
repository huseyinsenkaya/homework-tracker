import { useState, useEffect, useRef } from "react";
import classes from "./Assignments.module.css";
import AssignmentsList from "../components/assignments/AssignmentsList";
function Assignments() {
  const [homeworks, setHomeworks] = useState([]);

  useEffect(async () => {
    await fetch("http://localhost:5000/all-teachers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHomeworks(data);

        // const id = window.sessionStorage.getItem("userId");
        // setFound(homeworks.find((item) => item._id === id).homeworks);
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
