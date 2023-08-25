import React, { useState } from "react";
import myPosts from "../utils/MyArray";
import "../css/style.css";
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  Link
} from "react-router-dom";

import MyArray from "../utils/MyArray";


const Card =(props)=>{
  const { id = "no-encontrado" } = useParams();
  const navigate = useNavigate();
  const {param} = props

  const misPosts = MyArray();

  function handerInfo(txt, index) {
    alert(txt + index);
    if (txt === "LEER posteo ID: ") {
    }
  }

  const navigateToPage = (elementId) => {
    navigate(`/posteo/${elementId}`);
    // navigate(`/`);
  };


  return (
    <div className="app">
      <h1 style={{ marginTop: "50px" }}>Lista de Posteos</h1>
      <div className="card-list">
        {misPosts.map((element) => (
          <div key={element.id} className="card">
            <h2>{element.titulo}</h2>
            <p>{element.texto}</p>
            <button
              onClick={() => {
                navigateToPage(element.id);
              }}
            >
              LEER
            </button>
            {/* <NavLink to={`/posteo/${element.id}`}>LEER</NavLink> */}
            <button
              onClick={() => {
                handerInfo("MODIFICAR posteo ID: ", element.id);
              }}
            >
              MODIFICAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card