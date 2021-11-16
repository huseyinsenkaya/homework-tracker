import { Link } from "react-router-dom";
import classes from "../MainNavigation.module.css";
function PrincipalLinks() {
  return (
    <>
      <li className="nav-item">
        <Link className={classes.navLink} to="/add-teacher">
          Add a Teacher
        </Link>
      </li>
      <li className="nav-item">
        <Link className={classes.navLink} to="/all-teachers">
          Teachers
        </Link>
      </li>
      <li className="nav-item">
        <Link className={classes.navLink} to="/add-student">
          Add a Student
        </Link>
      </li>
      <li className="nav-item">
        <Link className={classes.navLink} to="/all-students">
          Students
        </Link>
      </li>
    </>
  );
}

export default PrincipalLinks;
