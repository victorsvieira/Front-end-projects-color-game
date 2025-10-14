import React, { useState, useEffect, useReducer, createContext, useContext } from "react";
import Game from "./components/Game";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

type GameState = { points: number; mistakes: number; mistakesInARow: number; gameMode: string; language: string };
type GameAction =
  | { type: "CORRECT" }
  | { type: "INCORRECT" }
  | { type: "RGB" }
  | { type: "HEX" }
  | { type: "HSL" }
  | { type: "LANGUAGE-EN" }
  | { type: "LANGUAGE-PT" };

export const GameContext = createContext<{ state: GameState; dispatch: React.Dispatch<GameAction> }>({
  state: { points: 0, mistakes: 0, mistakesInARow: 0, gameMode: "RGB", language: "PT" },
  dispatch: () => {},
});

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "CORRECT":
      let tempPoints = 0;
      tempPoints = state.points + 5 - state.mistakesInARow;
      return { ...state, points: tempPoints, mistakesInARow: 0 };
    case "INCORRECT":
      return { ...state, mistakes: state.mistakes + 1, mistakesInARow: state.mistakesInARow + 1 };
    case "RGB":
      return { ...state, gameMode: "RGB" };
    case "HEX":
      return { ...state, gameMode: "HEX" };
    case "HSL":
      return { ...state, gameMode: "HSL" };
    case "LANGUAGE-EN":
      return { ...state, language: "EN" };
    case "LANGUAGE-PT":
      return { ...state, language: "PT" };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { points: 0, mistakes: 0, mistakesInARow: 0, gameMode: "RGB", language: "PT" });
  return (
    <GameContext value={{ state, dispatch }}>
      <div className="all-content">
        <div className="left-sidebar">
          <LeftSidebar />
        </div>
        <div className="main-content">
          {state.language === "EN" ? <h1>What color is this?</h1> : state.language === "PT" ? <h1>Que cor é essa?</h1> : <></>}

          <Game />
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </GameContext>
  );
}

export default App;
