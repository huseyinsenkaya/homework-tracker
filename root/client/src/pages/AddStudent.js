import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AddStudent.module.css";

function AddStudent() {
  const navigate = useNavigate();

  const fullNameInputRef = useRef();
  const userNameInputRef = useRef();
  const emailInputRef = useRef();
  const teacherInputRef = useRef();
  const passwordInputRef = useRef();

  //Handlers
  function submitHandler(event) {
    event.preventDefault();

    const enteredFullName = fullNameInputRef.current.value;
    const enteredUserName = userNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredTeacher = teacherInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const studentData = {
      fullName: enteredFullName,
      username: enteredUserName,
      email: enteredEmail,
      teacher: enteredTeacher,
      password: enteredPassword,
    };
    addStudentHandler(studentData);
  }

  function addStudentHandler(studentData) {
    fetch("http://localhost:5000/add-student", {
      method: "POST",
      body: JSON.stringify(studentData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/all-students");
    });
  }

  return (
    <div className={classes.container}>
      <h1>Add a Student</h1>
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
          <label htmlFor="teacher">Teacher</label>
          <input
            className={classes.input}
            type="text"
            required
            id="teacher"
            ref={teacherInputRef}
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

export default AddStudent;
