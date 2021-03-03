import React, { useState } from "react";
import Timer from "./components/Timer";
import "./style.css";
import Game from "./Game";

const App: React.FC = () => {
  const [shouldDisplayTimer, setShouldDisplayTimer] = useState(true);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  
  const setSize=(width:number, height: number)=>{
    setHeight(height)
    setWidth(width)
  }

  return (
    <>
      <h1>Game of Life</h1>
      {shouldDisplayTimer && <Timer onClose={() => setShouldDisplayTimer(false)} />}
      <div className="size">
        <button
          className="btn"
          onClick={() => {
            setSize(10, 10);
          }}
        >
          10x10
        </button>
        <button
          className="btn"
          onClick={() => {
            setSize(20, 20);
          }}
        >
          20x20
        </button>
      </div>
      <Game width={width} height={height} />
    </>
  );
};

export default App;
