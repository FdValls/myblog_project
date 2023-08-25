import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import RouterMain from "./routes/RouterMain";

function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <div className="App">
      <header>
        <RouterMain />
      </header>
    </div>
  );
}

export default App;
