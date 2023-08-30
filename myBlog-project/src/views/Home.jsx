import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [greeting, setGreeting] = useState("Greeting");
  const { email = "no-encontrado" } = useParams();

  useEffect(() => {
    setGreeting(email);
  }, [greeting]);

  return (
    <div>
      {email === "no-encontrado" ? (
        <h1 style={{color: "aqua"}}>A Navegar!!!</h1>
      ) : (
        <h1 style={{ color: "black" }}>Bienvenido {greeting}!</h1>
      )}
    </div>
  );
}

export default Home;
