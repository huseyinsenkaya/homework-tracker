import StudentItem from "./StudentItem";

function StudentList(props) {
  return (
    <ul>
      {props.students.map((student, index) => (
        <StudentItem
          key={index}
          id={student._id}
          fullName={student.fullName}
          username={student.username}
          email={student.email}
        />
      )
      )}
    </ul>
  );
}

export default StudentList;
