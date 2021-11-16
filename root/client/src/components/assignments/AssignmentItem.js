import classes from "./AssignmentItem.module.css";
function AssignmentItem(props) {
  return (
    <>
      <li className={classes.li}>
        <div className={classes.top}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
            <p>
              <span>description:</span> {props.description}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default AssignmentItem;
