import React from "react";
import NavbarUser from "../navbar-usuario/Navbar_usuario";
// import { Link } from "react-router-dom";
import "./Home-usuario.css";

function Home_usuario() {
  return (
    <div>
      <NavbarUser />
      <div className="bg">
        <h1>Panel Adminstracion</h1>
      </div>
    </div>
  );
}

export default Home_usuario;
