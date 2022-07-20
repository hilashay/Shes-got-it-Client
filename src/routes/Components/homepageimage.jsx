import React from "react";
import "../../Reviews.css";
import first from "../../first.jpeg";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import homepage from "../../homepage.jpeg";
import "../../App.css";

const homepageimage = () => {
  return <img src={first} className="App-logo" alt="Logo" />;
};

export default homepageimage;
