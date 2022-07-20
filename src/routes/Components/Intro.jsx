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
import homepage from "../../homepage.jpeg";

const Intro = () => {
  return (
    <div>
      {" "}
      <h1>Meet she's got it</h1>
      <img src={homepage} className="App-main-img" alt="Logo" />
      <h2>No Need To Spend More Time For Shopping!</h2>
      <p className="first-p">
        As a woman to a man who doesn't understand too much in fashion. Or even a combination of
        colors .... We will <br />
        add the fact that his time is too precious for him to spend on searching for clothes,
        knowing that he probably <br />
        didn't know what to choose and in any case will be disappointed with the order. <br />
        <br />
        <br />
        So of course that the one who does all this for him willingly, is me. <br />
        We thought, why not help those people who want to look good but don't want to pay the price
        of wasting their time on it <br />
        and buying the clothes for them? <br />
        <br />
        <br />
        So i'm Hila Shay, not a certified stylist, (actually I'm currently studying software
        engineering) <br />
        but I have good taste when it comes to clothes and more then that, I want to make people
        looks and feel great! <br />
        So if I need to make my living from something in the meantime, why not do it with my biggest
        lover - <br />
        "Add to cart" <br />
        and do good on the way :)
      </p>
    </div>
  );
};

export default Intro;
