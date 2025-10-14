import React, { useContext } from "react";
import "./LeftSidebar.css";
import { GameContext } from "../App";

function LeftSidebar() {
  const { dispatch } = useContext(GameContext);
  const { state } = useContext(GameContext);

  const handleGameMode = (gameMode: string) => {
    console.log("Clicou para mudar para " + gameMode);
    dispatch({ type: gameMode as "RGB" | "HEX" | "HSL" });
  };

  return (
    <div className="left-sidebar-main-content">
      <div className="score-board">
        <div className="points-board">
          <i className="bx  bxs-star"></i>
          <span id="points-counting">{state.points} </span>
        </div>
        <div className="error-board">
          <i className="bx  bxs-x-circle "></i>
          <span id="mistakes-counting">{state.mistakes} </span>
        </div>
      </div>
      <div className="game-modes">
        <button onClick={() => handleGameMode("RGB")}>RGB</button>
        <button onClick={() => handleGameMode("HEX")}>HEX</button>
        <button onClick={() => handleGameMode("HSL")}>HSL</button>
      </div>
    </div>
  );
}

export default LeftSidebar;
