//Style
import classes from "./Home.module.css";
import homePage from "../images/homePage.png";
function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.left}>
        <h1>Homework Tracker</h1>
        <p>A homework tracking platform for elementary school.</p>
      </div>
      <div className={classes.right}>
        <img src={homePage} alt=""></img>
      </div>
    </div>
  );
}

export default Home;
