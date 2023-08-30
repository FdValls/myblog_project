import React, { useState } from "react";
import "../css/style.css";
import {
  useNavigate,
  Link,
} from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const { lista } = props;

  function handerInfo(txt, index) {
    alert(txt + index);
  }

  const navigateToPage = (elementId) => {
    navigate(`/posteo/${elementId}`);
  };

  return (
    
    <div className="app">
      <h1 style={{ marginTop: "50px", color: "black" }}>Lista de Posteos</h1>
      <div className="card-list">
        {lista.map((element) => (
          <div key={element.id} className="card">
            <h2>{element.titulo}</h2>
            <p>{element.texto}</p>
            <div>
              <button
                onClick={() => {
                  navigateToPage(element.id);
                }}
              >
                LEER
              </button>
              <button
                onClick={() => {
                  handerInfo("MODIFICAR posteo ID: ", element.id);
                }}
              >
                MODIFICAR
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop: "25px" }}>
        <Link
          to="/crear"
          style={{color: "black" }}
        >
          Atras
        </Link>
      </div>
    </div>
  );
};

export default Card;
