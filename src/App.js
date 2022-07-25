import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isOff, setIsOff] = useState(false);
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
        <button
          data-testid="minus-btn"
          onClick={() => decreaseCounter()}
          disabled={isOff}
        >
          -
        </button>
        <button
          data-testid="plus-btn"
          onClick={() => increaseCounter()}
          disabled={isOff}
        >
          +
        </button>
      </div>
      <button
        style={{ backgroundColor: "blue" }}
        data-testid="on-off-btn"
        onClick={() => {
          setIsOff((prev) => !prev);
        }}
      >
        on/off
      </button>
    </div>
  );
}

export default App;
