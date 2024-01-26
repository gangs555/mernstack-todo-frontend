import axios from "axios";

const baseUrl = "https://mernstack-todoapp-backend.onrender.com";

const getAllTasks = (setTodo) => {
  axios
    .get(baseUrl)
    .then((data) => {
      console.log("dataa===", data);
      setTodo(data.data);
    })
    .catch((err) => console.log(err));
};

const addTask = (text, setTodo, setText) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(() => {
      setText("");
      getAllTasks(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTask = (id, text, setIsUdpdate, setTodo, setText) => {
  axios.post(`${baseUrl}/update`, { text, _id: id }).then(() => {
    console.log("updated");
    setIsUdpdate(false);
    setText("");
    getAllTasks(setTodo);
  });
};

const deleteTask = (id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id: id })
    .then(() => {
      console.log("deleted task");
      getAllTasks(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllTasks, addTask, updateTask, deleteTask };
