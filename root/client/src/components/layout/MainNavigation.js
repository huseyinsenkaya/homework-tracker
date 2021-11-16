import { Link, useNavigate } from "react-router-dom";

//Style
import classes from "./MainNavigation.module.css";
import PrincipalLinks from "./NavLinks/PrincipalLinks";
import TeacherLinks from "./NavLinks/TeacherLinks";

function MainNavigation(props) {
  const navigate = useNavigate();
  function handleLogout() {
    window.sessionStorage.setItem("userRole", "0");
    window.location.reload(false);
  }

  const userId = Number(window.sessionStorage.getItem("userRole"));
  let checkAuth = "";
  if (props.isAuth && userId === 1) {
    checkAuth = "Admin";
  } else if (props.isAuth && userId === 2) {
    checkAuth = "Teacher";
  } else {
    checkAuth = "Student";
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
            {checkAuth === "Admin" && <PrincipalLinks />}

            {/* The Teacher*/}
            {checkAuth === "Teacher" && <TeacherLinks />}

            {/* Login/Logout */}
            <li className="nav-item">
              {props.isAuth && (
                <Link
                  className={classes.navLink + " " + classes.btn}
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              )}
            </li>
            <li>
              {!props.isAuth && (
                <Link
                  className={classes.navLink + " " + classes.btn}
                  to="/login"
                >
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

export default MainNavigation;
