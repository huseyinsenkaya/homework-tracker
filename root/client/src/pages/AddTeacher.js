import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
      navigate("/");
    });
  }

  return (
    <div className="container">
      <h1>Add a Teacher</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Full name</label>
          <input type="text" required id="name" ref={fullNameInputRef} />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" ref={userNameInputRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTeacher;
