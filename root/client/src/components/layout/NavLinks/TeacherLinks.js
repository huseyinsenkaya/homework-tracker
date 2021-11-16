import { Link } from "react-router-dom";
import classes from "../MainNavigation.module.css";
function TeacherLinks() {
  return (
    <>
      <li className="nav-item">
        <Link className={classes.navLink} to="/add-homework">
          Add a Homework
        </Link>
      </li>
      <li className="nav-item">
        <Link className={classes.navLink} to="/assignments">
          My Assignments
        </Link>
      </li>
      <li className="nav-item">
        <Link className={classes.navLink} to="/my-students">
          My Students
        </Link>
      </li>
    </>
  );
}

export default TeacherLinks;
