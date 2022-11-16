import logo from "./logo.svg";
import "./App.css";
import Covid from "./views/Covid";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import Todo from "./views/Todo";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEventClick = (event) => {
    if (!value) {
      return;
    }

    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: value,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };

  const handleOnchangeInput = (event) => {
    setValue(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" exact element={<Covid></Covid>}></Route>
          
          <Route path="/blog"  element={<Blog></Blog>}></Route>
          {/* <Route path="/blog/:id"  element={<DetailBlog></DetailBlog>}></Route> */}
         
          <Route
            path="/todo"
            element={
              <>
                {" "}
                <Todo
                  todos={todos}
                  title={"All todos"}
                  deleteDataTodo={deleteDataTodo}
                />
                <input
                  type="text"
                  value={value}
                  onChange={(event) => handleOnchangeInput(event)}
                />
                <button
                  type="button"
                  onClick={(event) => handleEventClick(event)}
                >
                  Click me
                </button>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
