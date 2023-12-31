import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  Router,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "../views/Home";
import Error404 from "../views/Error404";
import NoAutorizado from "../views/NoAutorizado";
import Card from "../components/Card";
import LabelBottomNavigation from "../components/Menu/BottomNavigation.jsx";
import Crear from "../components/Crear";
import PosteoDescripcion from "../components/PosteoDescripcion";
import SignIn from "../components/SignIn";
import CardForm from "../components/CardForm";

function RouterMain(props) {
  const { prueba } = props;
  const { lista } = props;
  const { setLista } = props;
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  return (
    <>
      <BrowserRouter>
        {!isAuthenticate ? (
          <SignIn
            authenticate={isAuthenticate}
            setIsAuthenticate={setIsAuthenticate}
          />
        ) : (
          <>
            <div>
              <LabelBottomNavigation setIsAuthenticate={setIsAuthenticate} />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/:email" element={<Home />} />
              <Route
                path="/crear"
                element={
                  <CardForm prueba={prueba} lista={lista} setLista={setLista} />
                }
              />
              <Route path="/posteo">
                <Route index element={<Card lista={lista} />} />
                <Route path=":id" element={<PosteoDescripcion />} />
              </Route>

              <Route path="*" element={<Error404 />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default RouterMain;
