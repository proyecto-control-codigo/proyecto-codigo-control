import React from "react";
import "./Controla.css";
import Navbar from "../navbar-usuario/Navbar_usuario";
import Footer from "../footer/Footer";

const Controla = () => {
  return (
    <div className="controla">
      <Navbar />
      <div className="contain-forms">
        <div className="formularios">
          <form action="submit">
            <div className="seleccionar">
              <label className="label-style" htmlFor="seleccionar">
                Seleccionar{" "}
              </label>
              <select
                name="seleccionar"
                id="seleccionar"
                className="input-style"
              >
                <option hidden selected></option>
                <option value="Chev">Objeto1</option>
                <option value="Ford">Objeto2</option>
                <option value="Dodge">Objeto3</option>
              </select>
            </div>
            <label htmlFor="" className="label-style">
              Estado :{" "}
            </label>
            <input
              type="text"
              id="estado"
              name="estado"
              className="input_style"
            />
            <br />
            <label htmlFor="pagina" className="label-style">
              Pagina :{" "}
            </label>
            <input
              type="text"
              id="pagina"
              name="pagina"
              className="input_style"
            />
            <br />
            <label htmlFor="otros" className="label-style">
              {" "}
              Otros :{" "}
            </label>
            <input
              type="text"
              id="otros"
              name="otros"
              className="input_style"
            />
            <br />
            <textarea
              type="textarea"
              name="observaciones"
              id="obsevacioens"
              placeholder="Observaciones.."
              className="obs"
            />
            <br />
            <input type="button" value="Guardar" className="btn-form" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Controla;
