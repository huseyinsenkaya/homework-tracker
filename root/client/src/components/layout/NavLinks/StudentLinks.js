import { Link } from "react-router-dom";
import classes from "../MainNavigation.module.css";
function StudentLinks() {
  return (
    <>
      <li className="nav-item">
        <Link className={classes.navLink} to="/add-homeworkStudent">
          Add Homework
        </Link>
      </li>
      <li className="nav-item">
        <Link className={classes.navLink} to="/homeworks-student">
          Homeworks
        </Link>
      </li>
    </>
  )
}

export default StudentLinks
