import Cartel from "../components/Cartel/Cartel";
import { useParams, NavLink, Outlet } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>
        <Cartel content="🚧 403 No Autorizado!! 🙁" />
      </h1>
      <div>
        <NavLink style={{color: "black"}} to="/">Volver al inicio</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
