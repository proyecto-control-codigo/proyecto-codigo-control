import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Carrusel from "../carrusel/Carrusel";

const Home = () => {
  return (
    <div className="home">
      <div className="bg-img">
        <div className="container-button">
          <h1 className="title-home">
            Administra Controla y Comparte Lo Que Necesites
          </h1>
          <Link to="/login" className="boton">
            Comenzar
          </Link>
        </div>
      </div>
      <Carrusel />
      <Footer />
    </div>
  );
};

export default Home;
