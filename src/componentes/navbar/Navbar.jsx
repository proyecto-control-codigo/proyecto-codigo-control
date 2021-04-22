import React from "react";
import logo from "../../assets/imgs/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <h4>Control</h4>
        </div>
      </Link>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/home-usuario" className="links">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/quienes-somos" className="links">
              <a className="nav-link">Quienes Somos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
