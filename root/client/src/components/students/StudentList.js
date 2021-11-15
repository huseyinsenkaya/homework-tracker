import StudentItem from "./StudentItem";
import classes from './StudentList.module.css'

function StudentList(props) {
  return (
    <ul className={classes.ul}>
      {props.students.map((student, index) => (
        <StudentItem
          key={index}
          id={student._id}
          fullName={student.fullName}
          username={student.username}
          email={student.email}
          teacher={student.teacher}
        />
      )
      )}
    </ul>
  );
}

export default StudentList;
