import AssignmentItem from "./AssignmentItem";
import classes from "./AssignmentsList.module.css";

function AssignmentsList(props) {
  const id = window.sessionStorage.getItem("userId");
  const found = props.homeworks.find((item) => item._id === id);


  return (
    <ul className={classes.ul}>
      {found.homeworks.map((homework, index) => (
        <AssignmentItem
          key={index}
          id={homework._id}
          title={homework.title}
          description={homework.description}
          teacher={homework.teacher}
        />
      ))}
    </ul>
  );
}

export default AssignmentsList;
