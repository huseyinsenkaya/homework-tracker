import HomeWorksStudentItem from "./HomeWorksStudentItem";
import classes from "./HomeWorksStudentList.module.css";
function HomeWorksStudentList(props) {
  const id = window.sessionStorage.getItem("userId");
  const found = props.students.find((item) => item._id === id);
  
  return (
    <ul className={classes.ul}>
      {found.myHomeworks.map((homework, index) => (
        <HomeWorksStudentItem
          key={index}
          id={homework._id}
          title={homework.title}
          image={homework.image}
        />
      ))}
    </ul>
    
  );
}

export default HomeWorksStudentList;
