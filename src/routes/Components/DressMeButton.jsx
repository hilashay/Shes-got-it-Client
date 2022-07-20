import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "../../App.css";

const DressMeButton = () => {
  let navigate = useNavigate();
  return (
    <div className="dress-me-button-container">
      <div className="dress-me-button" onClick={() => navigate("dressme")}>
        Dress me!
      </div>
    </div>
  );
};

export default DressMeButton;
