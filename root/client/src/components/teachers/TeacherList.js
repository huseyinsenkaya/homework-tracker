import TeacherItem from "./TeacherItem";

function TeacherList(props) {
  return (
    <ul>
      {props.teachers.map((teacher, index) => (
        <TeacherItem
          key={index}
          id={teacher._id}
          fullName={teacher.fullName}
          username={teacher.username}
          email={teacher.email}
        />
      ))}
    </ul>
  );
}

export default TeacherList;
