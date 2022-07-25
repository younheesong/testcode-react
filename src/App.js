import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div data-testid="counter">{counter}</div>
    </div>
  );
}

export default App;
