import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./BottomNavigation.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import home from "../../images/home.png"; // Importa la imagen del icono
import style from "./style.js";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButtonClick = () => {
    // Aquí puedes agregar la lógica que deseas que ocurra al hacer clic en el botón.
    console.log("Botón 'Recents' fue clickeado");
    // alert("Hello World")
    // navigate(`/home`);
  };

  const iconStyles = {
    width: "28px", // Ancho del icono
    height: "28px", // Altura del icono
    // Otros estilos personalizados que desees aplicar
  };

  return (
    <header style={style}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          // label="Home"
          value="/"
          icon={<img src={home} alt="Custom Icon" style={iconStyles} />}
          // onClick={handleButtonClick}
          component={Link}
          to="/home" // Agrega el evento onClick aquí
        />
        <BottomNavigationAction
          label="Crear"
          value="crear"
          icon={<FavoriteIcon />}
          component={Link}
          to="/crear"
        />
        <BottomNavigationAction
          label="Posteo"
          value="posteo"
          icon={<LocationOnIcon />}
          component={Link}
          to="/posteo"
        />
      </BottomNavigation>
    </header>
  );
}
