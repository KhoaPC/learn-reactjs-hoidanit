import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    // Style tab active qua class 'active'
    <>
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo Apps</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/time">SetInterval</NavLink>
        <NavLink to="/search">Search</NavLink>
      </div>
    </>
  );
}

export default Nav;
