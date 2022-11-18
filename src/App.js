import logo from "./logo.svg";
import "./App.css";
import Covid from "./views/Covid";
import Blog from "./views/Blog";
import Time from "./views/Time";
import DetailBlog from "./views/DetailBlog";
import Todo from "./views/Todo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  redirect,
} from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import YoutubeSearch from "./views/YoutubeSearch";

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
      <Nav></Nav>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Covid></Covid>}></Route>
          <Route path="/time" element={<Time />}></Route>

          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/blog/:id" element={<DetailBlog></DetailBlog>}></Route>
          <Route
            path="/search"
            element={<YoutubeSearch></YoutubeSearch>}
          ></Route>

          <Route
            path="/todo"
            element={
              <>
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

/*
foo {
  color: ${p => p.active : 'red' : 'black'};

  & .active {
    font-weight: bold;
  }
}

// styled-components ~scss
// emotion           ~scss
// tailwind

// css

// server-side style

.modu


export function Foo() {
  return <Foo active={true}></Foo>
}
*/
