import ToDoItem from "./ToDoItem";
import styles from "./ToDoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toDoActions } from "../../store/todo-slice";

const ToDoList = (props) => {
  const dispatch = useDispatch();
  let counter = 0;
  const { toDos } = useSelector((state) => state.toDos);

  const deleteItemHandler = (id) => {
    dispatch(toDoActions.removeToDo(id));
  };

  const mappedTodos = toDos.map((todo) => {
    counter++;
    return (
      <ToDoItem
        text={counter + ". " + todo.text}
        key={todo.key}
        id={todo.id}
        deleteItemHandler={deleteItemHandler}
      />
    );
  });

  return <ul className={styles.toDos}>{mappedTodos}</ul>;
};

export default ToDoList;
