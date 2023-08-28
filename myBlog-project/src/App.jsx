import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import RouterMain from "./routes/RouterMain";
import SignIn from "./components/SignIn";
import MyArray from "./utils/MyArray";

function App() {
  const [autenticado, setAutenticado] = useState(true);
  const [prueba, setPrueba] = useState("Hello World Test!!!");
  const [arrayPost, setArrayPost] = useState(MyArray());

  return (
    <div className="App">
      <header>
          <RouterMain
            autenticado={autenticado}
            prueba={prueba}
            lista={arrayPost}
            setLista={setArrayPost}
          />
      </header>
    </div>
  );
}

export default App;
