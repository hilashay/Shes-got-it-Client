import first from "./first.jpeg";
import "./App.css";
import homepage from "./homepage.jpeg";
import hand from "./hand.png";
import bags from "./bags.png";
// import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Reviews from "./routes/reviews";
import About from "./routes/about";
import DressMe from "./routes/dressme";
import Success from "./routes/success";

function HomePage() {
  // console.log("logo:", logo);
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={first} className="App-logo" alt="Logo" />
        <br />
        <div className="hr"></div>
        <nav>
          <Link to="/about">About</Link> <Link to="/reviews">Reviews</Link>
        </nav>

        <img src={homepage} className="App-main-img" alt="Logo" />
      </header>

      <div>
        <h1>Meet she's got it</h1>

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
          We thought, why not help those people who want to look good but don't want to pay the
          price of wasting their time on it <br />
          and buying the clothes for them? <br />
          <br />
          <br />
          So i'm Hila Shay, not a certified stylist, (actually I'm currently studying software
          engineering) <br />
          but I have good taste when it comes to clothes and more then that, I want to make people
          looks and feel great! <br />
          So if I need to make my living from something in the meantime, why not do it with my
          biggest lover - <br />
          "Add to cart" <br />
          and do good on the way :)
        </p>

        <div className="btn-dress-me" onClick={() => navigate("dressme")}>
          Dress me!
        </div>
        {/* <Outlet /> */}
        <br />

        <h3>What am I actually doing?</h3>

        <div className="process-container">
          <img src={hand} className="hand-img" alt="Logo" />
          <br />
          <p className="hand-text">
            Looking for match for you at all
            <br />
            platforms I know{" "}
          </p>
          <img src={bags} className="bags-img" alt="Logo" />
          <p className="bags-text">And the package is on its way to you </p>
        </div>
      </div>

      <footer>
        <p>© 2022 Hila Shay She's-got-it</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dressme" element={<DressMe />} />
        <Route path="about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dressme/success" element={<Success name={"idab"} />} />
      </Routes>
    </div>
  );
}

export default App;
