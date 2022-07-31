import "./App.css";
import ReviewsPage from "./routes/ReviewsPage";
import Login from "./routes/login";
import DressMe from "./routes/Dressme";
import Success from "./routes/success";
import Header from "./routes/Components/Header";
import Intro from "./routes/Components/Intro";
import DressMeButton from "./routes/Components/DressMeButton";
import MyJobPart from "./routes/Components/MyJobPart";
import { BrowserRouter as Router, Navigate, Route, Routes, Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <DressMeButton />
      <MyJobPart />

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
        <Route path="dressme/success/:id" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
