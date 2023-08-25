import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, Link, useNavigate } from "react-router-dom";
import home from "../../images/home.png"; // Importa la imagen del icono
import style from "./style.js";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconStyles = {
    width: "28px", 
    height: "28px", 
  };

  return (
    <header style={style}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          value="/"
          icon={<img src={home} alt="Custom Icon" style={iconStyles} />}
          component={Link}
          to="/home" 
        />
        <BottomNavigationAction
          value="crear"
          icon={<FavoriteIcon />}
          component={Link}
          to="/crear"
        />
        <BottomNavigationAction
          value="posteo"
          icon={<LocationOnIcon />}
          component={Link}
          to="/posteo"
        />
      </BottomNavigation>
    </header>
  );
}
