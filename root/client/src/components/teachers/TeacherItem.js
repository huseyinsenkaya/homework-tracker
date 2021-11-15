import { Link } from "react-router-dom";
import classes from "./TeacherItem.module.css";

function TeacherItem(props) {
  return (
    <>
      <li className={classes.li}>
        <div className={classes.top}>
          <h3>{props.fullName}</h3>
          <button onClick={props.removeHandler} data-id={props.id}>
            Remove
          </button>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
            <p>{props.username}</p>
            <p>{props.email}</p>
          </div>
          <div className={classes.actions}>
            <Link to="/">Students</Link>
            <Link to="/">Homeworks</Link>
          </div>
        </div>
      </li>
    </>
  );
}

export default TeacherItem;
