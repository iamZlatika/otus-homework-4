import React, { useState } from "react";
import Timer from "./components/Timer/Timer";
import "./style.css";
import Game from "./Game/Game";

const App: React.FC = () => {
  const [showTimer, setShowTimer] = useState(true);
  const [size, setSize] = useState([10, 10]);
  return (
    <>
      <h1>Game of Life</h1>
      {showTimer && <Timer onClose={() => setShowTimer(false)} />}
      <div className="size">
        <button
          className="btn"
          onClick={() => {
            setSize([10, 10]);
          }}
        >
          10x10
        </button>
        <button
          className="btn"
          onClick={() => {
            setSize([20, 20]);
          }}
        >
          20x20
        </button>
      </div>
      <Game width={size[0]} height={size[1]} />
    </>
  );
};

export default App;
