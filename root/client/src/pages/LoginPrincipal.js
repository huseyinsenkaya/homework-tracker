import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Login.module.css";

function LoginPrincipal(props) {
  const navigate = useNavigate();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    let flag = true;
    console.log(userNameInputRef);
    if (
      userNameInputRef.current.value === "admin" &&
      passwordInputRef.current.value === "admin123"
    ) {
      console.log("here");
      window.sessionStorage.setItem("userRole", "1");
      props.login();
      navigate("/");
    } else {
      flag = false;
    }
    if (!flag) {
      navigate("/login-principals");
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
