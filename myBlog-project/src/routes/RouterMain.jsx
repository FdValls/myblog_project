import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";

import Home from "../views/Home";
import Error404 from "../views/Error404";
import RouterPost from "./RouterPost";
import Card from "../components/Card";
import LabelBottomNavigation from "../components/Menu/BottomNavigation.jsx";
import Crear from "../components/Crear";
import PosteoId from "../components/PosteoId";
import PosteoDescripcion from "../components/PosteoDescripcion";

function RouterMain() {
  return (
    <>
      <BrowserRouter>
        <div>
          <LabelBottomNavigation />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posteo" element={<Card />} />
          <Route path="/posteo/:id" element={<PosteoDescripcion />} />
          <Route path="/crear" element={<Crear />}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterMain;
