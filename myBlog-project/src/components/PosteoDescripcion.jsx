import Cartel from "../components/Cartel/Cartel";
import { useParams, NavLink, Outlet } from "react-router-dom";

function PosteoDescripcion() {
  const { id = "id-no-encontrado" } = useParams();

  console.log(`este es el posteo utilizado, ID: ${id} `)

  return (
    <div>
      <h1>
        <Cartel content={`Id ${id}`} />
      </h1>
    </div>
  );
}

export default PosteoDescripcion;
