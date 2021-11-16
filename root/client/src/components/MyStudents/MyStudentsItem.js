import { Link } from "react-router-dom";
import classes from './MyStudentsItem.module.css'
function MyStudentsItem(props) {
  return (
    <>
      <li className={classes.li}>
        <div className={classes.top}>
          <h3>{props.fullName}</h3>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
            <p>
              <span>username:</span> {props.username}
            </p>
            <p>
              <span>email:</span> {props.email}
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

export default MyStudentsItem;
