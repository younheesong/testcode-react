import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function increaseCounter() {
    setCounter((counter) => counter + 1);
  }
  function decreaseCounter() {
    setCounter((counter) => counter - 1);
  }
  return (
    <div className="App">
      <div data-testid="counter">{counter}</div>
      <div>
        <button data-testid="minus-btn" onClick={() => decreaseCounter()}>
          -
        </button>
        <button data-testid="plus-btn" onClick={() => increaseCounter()}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
