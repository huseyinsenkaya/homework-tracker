//Default Student
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

function Login() {
  return (
    <div className={classes.login}>
      <h1>Student</h1>
      <form className={classes.form}>
        <div className={classes.formControl}>
          <label htmlFor="username">Username</label>
          <input
            className={classes.input}
            type="text"
            required
            id="username"
            autoComplete="off"
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="password">Password</label>
          <input
            className={classes.input}
            type="password"
            required
            id="password"
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
