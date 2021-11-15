import { useState, useEffect } from "react";

import TeacherList from "../components/teachers/TeacherList";

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

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Teachers</h1>
      <TeacherList teachers={loadedTeachers} />
    </section>
  );
}

export default AllTeachers;
