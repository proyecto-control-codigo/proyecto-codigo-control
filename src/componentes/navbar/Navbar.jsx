import React from "react";
import Logo from "../../assets/imgs/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Hamburguer from "../menu-hamb/Hamb";

const Navbar = () => {
  return (
    <header className="header-nav">
      <Link to="/" className="links-st">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
          <h4>Control</h4>
        </div>
      </Link>
      <nav className="navi-user">
        <ul className="navi-links">
          <li>
            <Link to="/" className="links-st">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/quienes-somos" className="links-st">
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link to="/login" className="links-st">
              Iniciar Sesion
            </Link>
          </li>
        </ul>
        <Hamburguer />
      </nav>
    </header>
  );
};

export default Navbar;
