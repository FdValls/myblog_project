import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, Link, useNavigate } from "react-router-dom";
import home from "../../images/home.png"; // Importa la imagen del icono
import post from "../../images/post.png"; // Importa la imagen del icono
import create from "../../images/create.png"; // Importa la imagen del icono
import style from "./style.js";
import labelColor from "./BottomNavStyles.css";

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
    <header >
      <BottomNavigation style={style} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label={<span className="labelColor">Home</span>}
          value="/"
          icon={<img src={home} alt="Custom Icon" style={iconStyles} />}
          component={Link}
          to="/home" 
        />
        <BottomNavigationAction
         label={<span className="labelColor">Crear</span>}
          value="crear"
          icon={<img src={create} alt="Custom Icon" style={iconStyles} />}
          component={Link}
          to="/crear"
        />
        <BottomNavigationAction
         label={<span className="labelColor">Posteo</span>}
          value="posteo"
          icon={<img src={post} alt="Custom Icon" style={iconStyles} />}
          component={Link}
          to="/posteo"
        />
      </BottomNavigation>
    </header>
  );
}
