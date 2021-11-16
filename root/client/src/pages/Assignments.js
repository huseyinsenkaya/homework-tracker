import { useState, useEffect } from "react";
import classes from "./Assignments.module.css";
import AssignmentsList from "../components/assignments/AssignmentsList";
function Assignments() {
  const [homeworks, setHomeworks] = useState([]);
  const [found, setFound] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-teachers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHomeworks(data);
        const id = window.sessionStorage.getItem("userId");
        setFound(homeworks.find((item) => item._id === id).homeworks);
      });
  }, [1]);

  
  console.log(found);

  return (
    <section className={classes.container}>
      <h1>All Teachers</h1>
      {/* <ul className={classes.ul}>
        {found.homeworks.map((homework) => (
          <li className={classes.li}>
            <div className={classes.top}>
              <h3>{homework.title}</h3>
            </div>
            <div className={classes.bottom}>
              <div className={classes.info}>
                <p>
                  <span>description:</span> {homework.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
    </section>
  );
}

export default Assignments;
