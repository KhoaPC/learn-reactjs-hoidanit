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
import OTP from "./OTP/OTP";
function App() {
  return (
    // Add router
    <Router>
      <Nav />
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
          
          <Route path="/otp" element={<OTP />}></Route>
       
          {/* 404 page
            * : tất các các path khác trừ các path đã định nghĩa trước đó 
          */}
          <Route path="*" element={(
            <h1>Hello 404 page</h1>
          )}></Route>
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

-challenge: ~tippy, ~react-otp-input, ~react-image-lightbox
*/
