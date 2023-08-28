import Cartel from "../components/Cartel/Cartel";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";

function PosteoDescripcion() {
  const { id = "id-no-encontrado" } = useParams();

  console.log(`este es el posteo utilizado, ID: ${id} `)

  return (
    <div>
      <h1>
        <Cartel content={`Id ${id}`} />
      </h1>
      <Link to="/posteo" style={{ textAlign: "center", marginTop: "15px", color: "black" }}>
        Volver a posteos
      </Link>
    </div>
  );
}

export default PosteoDescripcion;
