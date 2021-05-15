import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import "./Navbar_usuario.css";
import Menu from "../menu-hamb-user/Menu_hamb_user";

const DeployHamb = () => {
  return (
    <div className="hamb-list">
      <p className="items">Control</p>
      <p className="items">Adminsitra</p>
      <p className="items">Comparte</p>
      <p className="items">Salir</p>
    </div>
  );
};

function Navbar_usuario() {
  return (
    <div className="cont-nav-user">
      <header className="header">
        <Link to="/" className="links-st">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <h4>Control</h4>
          </div>
        </Link>
        <nav className="nav-user">
          <ul className="navi-links">
            <li>
              <Link to="/administra" className="navi-link">
                Administra
              </Link>
            </li>
            <li>
              <Link to="/" className="navi-link">
                Controla
              </Link>
            </li>
            <li>
              <Link to="/" className="navi-link">
                Comparte
              </Link>
            </li>
            <li>
              <Link to="/" className="navi-link">
                Salir <i className="fas fa-sign-out-alt"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <Menu />
      </header>
    </div>
  );
}

export default Navbar_usuario;
