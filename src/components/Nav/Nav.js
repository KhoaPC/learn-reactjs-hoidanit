import { Link } from "react-router-dom";
import "./Nav.css";
// Nav header
function Nav() {
  return (
    <>
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo Apps</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/time">SetInterval</Link>
        <Link to="/search">Search</Link>
      </div>
    </>
  );
}

export default Nav;
