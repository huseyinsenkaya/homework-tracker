import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AddTeacher.module.css";

function AddTeacher() {
  const navigate = useNavigate();

  const fullNameInputRef = useRef();
  const userNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //Handlers
  function submitHandler(event) {
    event.preventDefault();

    const enteredFullName = fullNameInputRef.current.value;
    const enteredUserName = userNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const teacherData = {
      fullName: enteredFullName,
      username: enteredUserName,
      email: enteredEmail,
      password: enteredPassword,
      homeworks: [],
      students: [],
    };
    addTeacherHandler(teacherData);
  }

  function addTeacherHandler(teacherData) {
    fetch("http://localhost:5000/add-teacher", {
      method: "POST",
      body: JSON.stringify(teacherData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/all-teachers");
    });
  }

  return (
    <div className={classes.container}>
      <h1>Add a Teacher</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <label htmlFor="name">Full name</label>
          <input
            className={classes.input}
            type="text"
            required
            id="name"
            ref={fullNameInputRef}
            autoComplete="off"
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="username">Username</label>
          <input
            className={classes.input}
            type="text"
            required
            id="username"
            ref={userNameInputRef}
            autoComplete="off"
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="email">Email</label>
          <input
            className={classes.input}
            type="text"
            required
            id="email"
            ref={emailInputRef}
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
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.btn}>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTeacher;
