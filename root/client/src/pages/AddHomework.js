import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AddHomework.module.css";

function AddHomework() {
  const navigate = useNavigate();
  //const [loadedTeachers, setLoadedTeachers] = useState([]);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  //const teacherNameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredTeacherId = window.sessionStorage.getItem("userId");

    const homeworkData = {
      title: enteredTitle,
      description: enteredDescription,
      teacherId: enteredTeacherId,
    };
    addHomeworkHandler(homeworkData);
  }

  function addHomeworkHandler(homeworkData) {
    fetch("http://localhost:5000/add-homework", {
      method: "POST",
      body: JSON.stringify(homeworkData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <>
      <div className={classes.container}>
        <h1>Add Homework</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.formControl}>
            <label htmlFor="title">Title</label>
            <input
              className={classes.input}
              type="text"
              required
              id="title"
              autoComplete="off"
              ref={titleInputRef}
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="description">Description</label>

            <textarea
              className={classes.textarea}
              type="text"
              required
              id="description"
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          {/* <div className={classes.formControl}>
            <label htmlFor="teacher">Teacher</label>
            <input
              className={classes.input}
              type="text"
              required
              id="teacher"
              autoComplete="off"
              ref={teacherNameInputRef}
            />
          </div> */}
          <div className={classes.btn}>
            <button>Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddHomework;
