import { Link } from "react-router-dom";

import classes from "./StudentItem.module.css";
function StudentItem(props) {
  return (
    <>
      <li className={classes.li}>
        <div className={classes.top}>
          <h3>{props.fullName}</h3>
          <button>Remove</button>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
            <p>
              <span>username:</span> {props.username}
            </p>
            <p>
              <span>email:</span> {props.email}
            </p>
            <p>
              <span>teacher:</span> {props.teacher}
            </p>
          </div>
          <div className={classes.actions}>
            <Link to="/">Homeworks</Link>
          </div>
        </div>
      </li>
    </>
  );
}

export default StudentItem;
