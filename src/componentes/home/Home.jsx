import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-img">
      <div className="container-button">
        <h1>Administra Controla y Comparte Lo Que Necesites</h1>
        <Link to="/login" className="btn">
          Comenzar
        </Link>
      </div>
    </div>
  );
};

export default Home;
