import classes from "./HomeWorksStudentItem.module.css";
function HomeWorksStudentItem(props) {
  
  const b64 = new Buffer.from(props.image).toString('base64')
  const mimeType = "image/png"
  return (
    <>
      <li className={classes.li}>
        <div className={classes.top}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.bottom}>
          <div className={classes.info}>
          <img src={`data:${mimeType};base64,${b64}`} alt="Homework" />
          </div>
        </div>
      </li>
    </>
  );
}

export default HomeWorksStudentItem;
