import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDos/ToDoList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <ToDoList />
    </div>
  );
}

export default App;
