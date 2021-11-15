//Components
import MainNavigation from "./MainNavigation";

//Style
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <MainNavigation isAuth={props.isAuth} />
      <main>
        <div className={classes.content}>{props.children}</div>
      </main>
    </div>
  );
}

export default Layout;
