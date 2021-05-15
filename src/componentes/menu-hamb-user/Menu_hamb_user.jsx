import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import "./Menu_hamb_user.css";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="boton-hamb"
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="hamburguesa-home-user">
          <div className="line-hamb"></div>
          <div className="line-hamb"></div>
          <div className="line-hamb"></div>
        </div>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem style={{ padding: "20px 20px" }} onClick={handleClose}>
          Administra
        </MenuItem>
        <MenuItem style={{ padding: "20px 20px" }} onClick={handleClose}>
          Controla
        </MenuItem>
        <MenuItem style={{ padding: "20px 20px" }} onClick={handleClose}>
          Comparte
        </MenuItem>
        <MenuItem style={{ padding: "20px 20px" }} onClick={handleClose}>
          Salir
        </MenuItem>
      </Menu>
    </div>
  );
}
