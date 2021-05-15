import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import card1 from "../../assets/imgs/card1.jpg";
import card2 from "../../assets/imgs/card2.jpg";
import card3 from "../../assets/imgs/card3.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    paddingRight: 5,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <section
      style={{
        display: "flex",
        textAlign: "center",
        paddingInline: "1rem",
        marginTop: "1rem",
      }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={card1}
            title="Contemplative Reptile"
          />
          <CardContent
            style={{ backgroundColor: "rgba(160, 240, 213, 0.815)" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "black" }}
            >
              Se Parte del Futuro
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "5px 8px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              officiis aliquid, totam ab cupiditate iusto commodi nesciunt
              atque?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={card2}
            title="Contemplative Reptile"
          />
          <CardContent
            style={{ backgroundColor: "rgba(160, 240, 213, 0.815)" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "black" }}
            >
              Nuestro Equipo
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "5px 8px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              consequuntur iusto numquam nesciunt nam odio nisi repellendus.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={card3}
            title="Contemplative Reptile"
          />
          <CardContent
            style={{ backgroundColor: "rgba(160, 240, 213, 0.815)" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "black" }}
            >
              Unete a Nosotros
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "5px 8px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              velit nemo laboriosam debitis doloremque cum! Consectetur,
              accusamus.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </section>
  );
}
