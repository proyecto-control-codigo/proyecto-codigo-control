import React from "react";
import "./Administra.css";

const Administra = () => {
  function clickHandler() {
    console.log("hola esta es una prueba");
  }
  return (
    <div>
      <button onClick={() => clickHandler()} className="btn">
        Comenzar
      </button>
    </div>
  );
};

export default Administra;
