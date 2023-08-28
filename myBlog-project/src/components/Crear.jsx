import React, { useState } from "react";
import { Link } from "react-router-dom";
import myPosts from "../utils/MyArray";

function Crear(props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [post, setPost] = useState(myPosts);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { nombre } = props;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameUserChange = (event) => {
    setNameUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    console.log(name);
    console.log(nameUser);
    console.log(nombre);

    const newPost = {
      id: 666,
      titulo: "Fernando Valls ",
      texto: "Test",
      user_id: 666,
      usuario: "Gon",
    };
    setPost([...post, newPost]);
  };

  const toggleIsNotEmpty = (e) => {
    if (text.trim() === "") {
      setIsEmpty(!isEmpty);
    }
    if (text.trim() !== "") {
      setIsNotEmpty(!isNotEmpty);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "initial",
        margin: "15px",
      }}
    >
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h1 style={{ color: "black", alignItems: "center", fontSize: "50px"}}>Creacion de post</h1>
        <div style={{ margin: "15px", textAlign: "initial" }}>
          <label htmlFor="name">Titulo: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "15px",
            textAlign: "initial",
          }}
        >
          <label htmlFor="text">Texto:</label>
          <textarea
            style={{ margin: "5px", padding: "4px" }}
            id="text"
            value={text}
            onChange={handleTextChange}
            rows={10}
            cols={70}
            placeholder=" Escribe aquí..."
          />
        </div>
        <div style={{ margin: "15px", textAlign: "initial" }}>
          <label htmlFor="name">Nombre de usuario: </label>
          <input
            type="text"
            id="nameUser"
            value={nameUser}
            onChange={handleNameUserChange}
          />
        </div>
        <div>
          <button
            style={{ backgroundColor: "black" }}
            type="submit"
            onClick={toggleIsNotEmpty}
          >
            Enviar
          </button>
        </div>
      </form>
      <Link
        to="/"
        style={{ textAlign: "center", marginTop: "15px", color: "black" }}
      >
        Volver al inicio
      </Link>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        {isNotEmpty ? "Mensaje enviado con éxito" : ""}
        {isEmpty ? "Mensaje NO enviado, campos vacíos 🤯" : ""}
      </div>
    </div>
  );
}

export default Crear;
