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
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Homework Tracker
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              {props.isAuth && (
                <Link className="nav-link" to="/" onClick={handleLogout}>
                  Logout
                </Link>
              )}
              {!props.isAuth && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>

            {/* Access list elements base on Principal, Teacher, Student */}
            {/* <UserActionsLinks isAuth={props.isAuth} /> */}

            {props.isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-teacher">
                  Add a Teacher
                </Link>
              </li>
            )}

            {/* The Principal
            
            {props.isAuth && 
            <li className="nav-item">
              <Link className="nav-link" to="/add-teacher">Add a Teacher</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-teachers">Teachers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-student">Add a Student</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-students">Students</Link>
            </li> */}
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
