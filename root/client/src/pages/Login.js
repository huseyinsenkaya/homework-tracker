//Default Student
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

function Login(props) {
  const navigate = useNavigate();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-students")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      });
  }, []);
  function submitHandler(event) {
    event.preventDefault();
    let flag = true;
    for (const item of students) {
      if (
        item.username === userNameInputRef.current.value &&
        item.password === passwordInputRef.current.value &&
        item.userRole === "Student"
      ) {
        //3 for student
        window.sessionStorage.setItem("userRole", "3");
        window.sessionStorage.setItem("userId", item._id);
        props.login();
        navigate("/");
        break;
      } else {
        flag = false;
      }
    }
    if (!flag) {
      navigate("/login-teacher");
    }
  }
  return (
    <div className={classes.login}>
      <h1>Student</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <label htmlFor="username">Username</label>
          <input
            className={classes.input}
            type="text"
            required
            id="username"
            autoComplete="off"
            ref={userNameInputRef}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="password">Password</label>
          <input
            className={classes.input}
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.btn}>
          <button>Login</button>
        </div>
      </form>

      <div>
        <Link className={classes.navLink} to="/login-principal">
          Principal Account
        </Link>
        <Link className={classes.navLink} to="/login-teacher">
          Teacher Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
