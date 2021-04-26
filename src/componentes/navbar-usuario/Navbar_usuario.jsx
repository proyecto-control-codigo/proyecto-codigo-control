import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import "./Navbar_usuario.css";

function Navbar_usuario() {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <h4>Control</h4>
          </div>
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#">
                Administra
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Controla
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Comparte
              </a>
            </li>
            <li>
              <Link to="/sidebar" className="nav-link">
                Salir
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar_usuario;
