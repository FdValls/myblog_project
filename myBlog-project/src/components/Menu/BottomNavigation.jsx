import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import home from "../../images/home.png";
import post from "../../images/post.png";
import create from "../../images/create.png";
import logout from "../../images/logout.png";
import style from "./style.js";
import labelColor from "./BottomNavStyles.css";

export default function LabelBottomNavigation(props) {
  const [value, setValue] = React.useState("recents");
  const { setIsAuthenticate } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconStyles = {
    width: "28px",
    height: "28px",
  };

  const handleLogout = () => {
    setIsAuthenticate(false);
  };

  return (
    <header>
      <BottomNavigation style={style} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label={<span className="labelColor">Logout</span>}
          value="/login"
          icon={<img src={logout} alt="Custom Icon" style={iconStyles} />}
          component={Link}
          to="/login"
          onClick={handleLogout}
        />
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
