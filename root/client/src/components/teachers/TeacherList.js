import TeacherItem from "./TeacherItem";
import classes from "./TeacherList.module.css";

function TeacherList(props) {
  return (
    <ul className={classes.ul}>
      {props.teachers.map((teacher, index) => (
        <TeacherItem
          key={index}
          id={teacher._id}
          fullName={teacher.fullName}
          username={teacher.username}
          email={teacher.email}
          removeHandler={props.removeHandler}
        />
      ))}
    </ul>
  );
}

export default TeacherList;
