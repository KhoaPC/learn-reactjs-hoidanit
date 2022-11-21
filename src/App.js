import logo from "./logo.svg";
import "./App.css";
import Covid from "./views/Covid";
import Blog from "./views/Blog";
import Time from "./views/Time";
import DetailBlog from "./views/DetailBlog";
import Todo from "./views/Todo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import YoutubeSearch from "./views/YoutubeSearch";
function App() {
  return (
    // Add router
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
// styled-components ~scss
// emotion           ~scss
// tailwind
// server-side style
*/
