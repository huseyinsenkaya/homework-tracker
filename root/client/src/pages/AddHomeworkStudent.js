import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import classes from "./AddHomeworkStudent.module.css";
function AddHomeworkStudent() {
  const navigate = useNavigate();
  // const titleTitleRef = useRef();
  // const titleImageRef = useRef();
  const [item, setItem] = useState({ title: "", image: "" });
  function submitHandler(event) {
    event.preventDefault();

    const bufferImage = new Buffer.from(item.image.split(",")[1], "base64");
    const homeworkStudentData = {
      title: item.title,
      image: bufferImage,
    };

    console.log(homeworkStudentData);

    addHomeworkStudentHandler(homeworkStudentData);
  }

  function addHomeworkStudentHandler(homeworkStudentData) {
    const enteredStudentId = window.sessionStorage.getItem("userId");
    fetch(`http://localhost:5000/add-homeworkStudent/${enteredStudentId}`, {
      method: "POST",
      body: JSON.stringify(homeworkStudentData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  // // Callback~s
  // function getFiles(files) {
  //   console.log(files);
  //   const enteredImage = files.base64;
  // }
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
              onChange={(e) => setItem({ ...item, title: e.target.value })}
            />
          </div>
          <div className={classes.formControl}>
            <label>max size 30KB</label>
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setItem({ ...item, image: base64 })}
            />
          </div>

          <div className={classes.btn}>
            <button>Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddHomeworkStudent;
