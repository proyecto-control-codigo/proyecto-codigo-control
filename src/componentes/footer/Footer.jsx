import React from "react";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center" width="100%">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Control
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div className="cont-footer">
      <div className="col">
        <h5>Encuentranos en: </h5>
        <ul className="titulo-redes">
          <li className="redes">
            <a className="redes-links" href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li className="redes">
            <a className="redes-links" href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="redes">
            <a className="redes-links" href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="col">
        <h5>Atencion al Cliente</h5>
        <button className="btn-cliente">
          {" "}
          <i className="fa fa-envelope cliente-st" aria-hidden="true"></i> Email
        </button>
        <button className="btn-cliente">
          <i className="fa fa-whatsapp cliente-st" aria-hidden="true"></i>{" "}
          WhatsApp
        </button>
      </div>
      <div className="col">
        <h5>Politicas y Terminos</h5>
        <ul className="terminos">
          <li>
            {" "}
            <a className="terms" href="#">
              Terminos y Condiciones
            </a>
          </li>
          <li>
            <a className="terms" href="#">
              Terminos de Privacidad
            </a>
          </li>
          <li>
            <a className="terms" href="#">
              Politicas de Seguridad
            </a>
          </li>
        </ul>
      </div>
      <div className="copy">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
