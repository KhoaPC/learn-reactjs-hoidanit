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

          <Route path="/todo" element={<Todo />}></Route>
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
