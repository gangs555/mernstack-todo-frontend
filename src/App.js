import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUdpdate] = useState(false);
  const [updateTaskId, setUpdateTaskId] = useState("");

  useEffect(() => {
    getAllTasks(setTodo);
  }, []);

  const updateMode = (id, text) => {
    setText(text);
    setUpdateTaskId(id);
    setIsUdpdate(true);
  };

  const deleteTodo = (id) => {
    console.log("gere");
    deleteTask(id, setTodo);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Tasks"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="add"
            onClick={
              isUpdate
                ? () =>
                    updateTask(
                      updateTaskId,
                      text,
                      setIsUdpdate,
                      setTodo,
                      setText
                    )
                : () => addTask(text, setTodo, setText)
            }
          >
            {isUpdate ? "Update" : "Add"}
          </button>
        </div>
        {console.log("====todo", todo)}
        <div className="list">
          {todo.map((value) => (
            <ToDo
              text={value.text}
              updateMode={() => updateMode(value._id, value.text)}
              deleteTodo={() => deleteTodo(value._id)}
              key={value._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
