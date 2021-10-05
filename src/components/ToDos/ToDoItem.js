import styles from "./ToDoItem.module.css";
import Button from "../../UI/Button";

const ToDoItem = (props) => {
  const deleteItemHandler = () => {
    props.deleteItemHandler(props.id);
  };

  return (
    <div className={styles.toDo}>
      <li>{props.text}</li>
      <Button onClick={deleteItemHandler}>Delete</Button>
    </div>
  );
};

export default ToDoItem;
