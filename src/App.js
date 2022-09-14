import "./App.css";
import ReviewsPage from "./routes/ReviewsPage";
import Login from "./routes/login";
import DressMe from "./routes/Dressme";
import Success from "./routes/Success";
import Header from "./routes/Components/Header";
import Intro from "./routes/Components/Intro";
import DressMeButton from "./routes/Components/DressMeButton";
import SlideShow from "./routes/Components/SlideShow";
import MyJobPart from "./routes/Components/MyJobPart";
import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <DressMeButton />
      <SlideShow />
      {/* <MyJobPart /> */}

      <footer>
        <p>© 2022 Hila Shay She's-got-it</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="conatiner">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dressme" element={<DressMe />} />
        <Route path="login" element={<Login />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="dressme/Success/:id" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
