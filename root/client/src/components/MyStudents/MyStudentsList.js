import classes from './MyStudentsList.module.css'
import MyStudentsItem from './MyStudentsItem'
function MyStudentsList(props) {
  const id = window.sessionStorage.getItem("userId");
  //console.log(props.teachers);
  const found = props.teachers.find((item) => item._id === id);
  const studentsArray = [...found.students]
  console.log(studentsArray);
  return (
    <ul className={classes.ul}>
      {studentsArray.map((student, index) => (
        <MyStudentsItem
          key={index}
          id={student._id}
          fullName={student.fullName}
          username={student.username}
          email={student.email}
        />
      )
      )}
    </ul>
  )
}

export default MyStudentsList
