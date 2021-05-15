import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import "./Hamb.css";

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
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="hamburguesa-home">
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
        <MenuItem onClick={handleClose}>Inicio</MenuItem>
        <MenuItem onClick={handleClose}>Quienes Somos</MenuItem>
        <MenuItem onClick={handleClose}>Iniciar Sesion</MenuItem>
      </Menu>
    </div>
  );
}
