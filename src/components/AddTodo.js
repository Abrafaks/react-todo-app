import { useState } from "react";
import { v4 } from "uuid";
import styles from "./AddTodo.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { toDoActions } from "../store/todo-slice";

const AddTodo = (props) => {
  const dispatch = useDispatch();

  const [toDo, setToDo] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const id = v4();
    dispatch(toDoActions.addToDo({ text: toDo, key: id, id }));
    setToDo("");
  };

  const toDoChangeHandler = (e) => {
    setToDo(e.target.value);
  };

  return (
    <form className={styles.addTodo} onSubmit={submitFormHandler}>
      <label htmlFor="todo">
        <h2>Enter your ToDo</h2>
      </label>
      <input
        type="text"
        id="todo"
        value={toDo}
        required
        autoCapitalize="off"
        onChange={toDoChangeHandler}
      />
      <Button type="submit">Add ToDo</Button>
    </form>
  );
};

export default AddTodo;
