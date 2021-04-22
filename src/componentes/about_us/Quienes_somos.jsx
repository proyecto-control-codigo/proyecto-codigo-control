import React from "react";
import Nav from "../navbar/Navbar";
import "./Quienes_somos.css";

const Quienes_somos = () => {
  return (
    <div className="container">
      <Nav />
      <div className="bg-about">
        <h1 className="titulo">Quienes somos?</h1>
        <p className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cum
          itaque. Repellendus qui necessitatibus magnam, deserunt ipsam,
          consequatur voluptatem illum ratione, quidem ut mollitia velit
          quibusdam? Repellendus aspernatur tenetur atque nam? Quam, sapiente
          mollitia. Maiores, deleniti. Sed harum porro, odit iusto nulla dolore
          ex sequi!
        </p>
      </div>
    </div>
  );
};

export default Quienes_somos;
