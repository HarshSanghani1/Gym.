import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/plans");
  };

  return (
    <div className="Home">
      <div className="text">
        <h1>Welcome</h1>
        <h2>Turn your sweat into success now!</h2>
      </div>
      <div className="btn">
        <button onClick={handleButtonClick}>See Plans</button>
      </div>
    </div>
  );
};
export default Home;
