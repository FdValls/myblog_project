import React, { useState, useEffect } from "react";
import "../css/cardForm.css";
import { v4 as uuidv4 } from "uuid";

const CardForm = (props) => {
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [userName, setUserName] = useState("");
  const { lista } = props;
  const { setLista } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: uuidv4(),
      titulo: title,
      texto: msg,
      user_id: lista.length + Math.floor(Math.random() * 1000),
      usuario: userName,
    };
    setLista([...lista, newPost]);
    console.log(...lista);
  };

  useEffect(() => {
    console.log(...lista);
  }, [lista]);

  return (
    <>
      <div>
        <h1 style={{ color: "black", fontSize: "50px", marginTop: "50px" }}>
          Creación de posteo
        </h1>
      </div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="input1">Nombre de usuario</label>
            <input
              type="text"
              id="input1"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input2">Titulo</label>
            <input
              type="text"
              id="input2"
              name="titulo"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Mensaje</label>
            <textarea
              id="textarea"
              className="form-control"
              name="mensaje"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default CardForm;
