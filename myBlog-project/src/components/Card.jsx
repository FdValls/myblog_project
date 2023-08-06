import React from "react";
import myPosts from "../utils/myArray";
import "../css/style.css";

export default function Card() {

    function handerInfo(txt, index){
        alert(txt + index)
    }

  return (
    <div className="app">
      <h1>Lista de Posteos</h1>
      <div className="card-list">
        {myPosts().map((element) => (
          <div key={element.id} className="card">
            <h2>{element.titulo}</h2>
            {/* <p>{element.texto}</p> */}
            {/* <p>User: {element.usuario}</p> */}
            <button onClick={() => {handerInfo("LEER posteo ID: ",element.id)}}>LEER</button>
            <button onClick={() => {handerInfo("MODIFICAR posteo ID: ",element.id)}}>MODIFICAR</button>
          </div>
        ))}
      </div>
    </div>
  );
}
