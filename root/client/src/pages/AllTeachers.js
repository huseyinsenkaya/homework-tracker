import { useState, useEffect } from "react";

import TeacherList from "../components/teachers/TeacherList";
import classes from "./AllTeachers.module.css";

function AllTeachers() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTeachers, setLoadedTeachers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/all-teachers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedTeachers(data);
      });
  }, []);

  function removeHandler(e) {
    const id = { id: e.currentTarget.getAttribute("data-id") };
    const newArr = loadedTeachers.filter((item) => item._id !== id.id);
    setLoadedTeachers(newArr);

    fetch("http://localhost:5000/remove-teacher", {
      method: "POST",
      body: JSON.stringify(id),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.container}>
      <h1>All Teachers</h1>
      <TeacherList teachers={loadedTeachers} removeHandler={removeHandler} />
    </section>
  );
}

export default AllTeachers;
