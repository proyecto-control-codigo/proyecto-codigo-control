import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import imagen1 from "../../assets/imgs/carrusel-imgs/img1.jpg";
import imagen2 from "../../assets/imgs/carrusel-imgs/img2.jpg";
import imagen3 from "../../assets/imgs/carrusel-imgs/img3.jpg";
import { Height } from "@material-ui/icons";

function Carrusel(props) {
  var items = [
    {
      source: imagen1,
      name: "Ahorra Tiempo",
      description: "Automatiza procesos!",
    },
    {
      source: imagen2,
      name: "Programa tu tiempo",
      description: "Controla el tiempo que tomaras!",
    },
    {
      source: imagen3,
      name: "Graficas",
      description: "Analisis de tu trabajo en tiempo real!",
    },
  ];

  return (
    <Carousel
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper style={{ textAlign: "center", backgroundColor: "#b8f5c8" }}>
      <img
        src={props.item.source}
        alt="imagen"
        style={{
          height: "400px",
          width: "90%",
          marginTop: "30px",
          borderRadius: "15px",
        }}
      />
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button
        style={{
          color: "black",
          backgroundColor: "#f5b8e5",
          border: "1px solid black",
          marginBottom: "20px",
        }}
        className="CheckButton"
      >
        Registrate
      </Button>
    </Paper>
  );
}

export default Carrusel;
