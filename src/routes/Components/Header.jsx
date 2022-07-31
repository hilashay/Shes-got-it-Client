import React from "react";
import "../../Reviews.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import first from "../../first.jpeg";
import "../../App.css";

const Header = () => {
  return (
    <header className="App-header">
      <a href="/">
        <img src={first} className="App-logo" alt="Logo" />
      </a>

      <br />
      <div className="header"></div>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>{" "}
        <Link className="link" to="/login">
          Login
        </Link>{" "}
        <Link className="link" to="/reviews">
          Reviews
        </Link>
      </nav>
      {/* <img src={homepage} className="App-main-img" alt="Logo" /> */}
    </header>
  );
};

export default Header;
