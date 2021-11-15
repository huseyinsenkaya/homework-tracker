import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Login.module.css";

function LoginPrincipal(props) {
  const navigate = useNavigate();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    //For testing
    if (
      userNameInputRef.current.value === "Admin" &&
      passwordInputRef.current.value === "Admin123"
    ) {
      window.sessionStorage.setItem("userId", "1");
      props.login();
      navigate("/");
    } else {
      navigate("/login-principal");
    }
  }

  return (
    <div className={classes.login}>
      <h1>Principal</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            id="username"
            ref={userNameInputRef}
            autoComplete="off"
            className={classes.input}
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
        <Link className={classes.navLink} to="/login">
          Student Account
        </Link>
        <Link className={classes.navLink} to="/login-teacher">
          Teacher Account
        </Link>
      </div>
    </div>
  );
}

export default LoginPrincipal;
