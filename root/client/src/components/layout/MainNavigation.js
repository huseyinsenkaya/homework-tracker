import { Link, useNavigate } from "react-router-dom";

//Style
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  const navigate = useNavigate();
  function handleLogout() {
    window.sessionStorage.setItem("userId", "0");
    window.location.reload(false);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0">
          <Link className="navbar-brand" className={classes.logo} to="/">
            Homework Tracker
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* The Principal*/}
            {props.isAuth && (
              <li className="nav-item">
                <Link className={classes.navLink} to="/add-teacher">
                  Add a Teacher
                </Link>
              </li>
            )}
            {props.isAuth && (
              <li className="nav-item">
                <Link className={classes.navLink} to="/all-teachers">
                  Teachers
                </Link>
              </li>
            )}
            {props.isAuth && (
              <li className="nav-item">
                <Link className={classes.navLink} to="/add-student">
                  Add a Student
                </Link>
              </li>
            )}
            {props.isAuth && (
              <li className="nav-item">
                <Link className={classes.navLink} to="/all-students">
                  Students
                </Link>
              </li>
            )}

            {/* Login/Logout */}
            <li className="nav-item">
              {props.isAuth && (
                <Link className={classes.navLink+" "+classes.btn} to="/" onClick={handleLogout}>
                  Logout
                </Link>
              )}
            </li>
            <li>
              {!props.isAuth && (
                <Link className={classes.navLink+" "+classes.btn} to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

// function UserActionsLinks(isAuth) {
//   if (isAuth) {
//     if (role === "Admin") {
//     } else if (role === "Teacher") {
//     } else {
//     }
//   }
// }

export default MainNavigation;
