import React, { useState, useEffect, useContext } from "react";
import "./Game.css";
import { GameContext } from "../App";
import RgbTutorial from "./tutorials/RgbTutorial";
import HexTutorial from "./tutorials/HexTutorial";
import HslTutorial from "./tutorials/HslTutorial";

function Game() {
  const { dispatch } = useContext(GameContext);
  const { state } = useContext(GameContext);

  const [colorValues, setColorValues] = useState([[]]);
  const [correctOption, setCorrectOption] = useState([]);
  const [nextRound, setNextRound] = useState(false);
  const [hiddenButtons, setHiddenButtons] = useState([]);

  useEffect(() => {
    if (String(state.gameMode) === "RGB") {
      console.log("Entrou no modo de Jogo RGB.");
      let RGBValues = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          RGBValues[i][j] = Math.floor(Math.random() * 256);
        }
      }
      setColorValues(RGBValues);
      const correctOption = RGBValues[Math.floor(Math.random() * 5)];
      setCorrectOption(correctOption);
      setHiddenButtons([]);
    } else if (String(state.gameMode) === "HEX") {
      console.log("Entrou no modo de Jogo HEX.");
      let HEXArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
      let HEXRandomValues = [];
      for (let e = 0; e < 6; e++) {
        let HEXRandomValue = "";
        for (let i = 0; i < 6; i++) {
          HEXRandomValue = HEXRandomValue + HEXArray[Math.floor(Math.random() * HEXArray.length)];
        }
        HEXRandomValues.push(HEXRandomValue);
      }
      setColorValues(HEXRandomValues);
      const correctOption = HEXRandomValues[Math.floor(Math.random() * 5)];
      setCorrectOption(correctOption);
      setHiddenButtons([]);
    } else if (String(state.gameMode) === "HSL") {
      console.log("Entrou no modo de Jogo HSL.");
      let HSLValue = "";
      let HSLRandomValues = [];
      for (let i = 0; i < 6; i++) {
        HSLValue = Math.floor(Math.random() * 359) + " " + Math.floor(Math.random() * 100) + " " + Math.floor(Math.random() * 100);
        HSLRandomValues.push(HSLValue);
      }
      setColorValues(HSLRandomValues);
      console.log(HSLRandomValues);
      const correctOption = HSLRandomValues[Math.floor(Math.random() * 5)];
      setCorrectOption(correctOption);
      setHiddenButtons([]);
    }
  }, [nextRound, state.gameMode]);

  function chooseRGBOption(RGBValue, index) {
    if (RGBValue === correctOption) {
      setNextRound(!nextRound);
      dispatch({ type: "CORRECT" });
    } else {
      setHiddenButtons((prev) => [...prev, index]);
      dispatch({ type: "INCORRECT" });
    }
  }
  function chooseHEXOption(HEXValue, index) {
    if (HEXValue === correctOption) {
      setNextRound(!nextRound);
      dispatch({ type: "CORRECT" });
    } else {
      setHiddenButtons((prev) => [...prev, index]);
      dispatch({ type: "INCORRECT" });
    }
  }
  function chooseHSLOption(HSLValue, index) {
    if (HSLValue === correctOption) {
      setNextRound(!nextRound);
      dispatch({ type: "CORRECT" });
    } else {
      setHiddenButtons((prev) => [...prev, index]);
      dispatch({ type: "INCORRECT" });
    }
  }

  function formatHSL(str) {
    str = String(str);
    const parts = str.trim().split(/\s+/).map(Number);

    let [h, s, l] = parts;

    const hText = h !== undefined ? `${h}º` : "";
    const sText = s !== undefined ? `${s}%` : "";
    const lText = l !== undefined ? `${l}%` : "";

    const values = [hText, sText, lText].filter(Boolean).join(", ");

    return `Hsl (${values})`;
  }

  // Exemplos:
  console.log(formatHSL("140 60 30")); // HSL (140º, 60%, 30%)
  console.log(formatHSL("50 1 56")); // HSL (50º, 1%, 56%)
  console.log(formatHSL("200")); // HSL (200º)

  return (
    <div className="game-main-content">
      {state.gameMode === "RGB" ? (
        <>
          <h2>{"Rgb (" + correctOption[0] + ", " + correctOption[1] + ", " + correctOption[2] + ")"}</h2>
          <div className="options-container">
            {colorValues.map((RGBValue, i) => (
              <button
                id={RGBValue}
                onClick={() => chooseRGBOption(RGBValue, i)}
                key={i}
                className="option-button"
                style={{
                  backgroundColor: "rgb(" + RGBValue[0] + "," + RGBValue[1] + "," + RGBValue[2] + ")",
                  visibility: hiddenButtons.includes(i) ? "hidden" : "visible",
                }}
              ></button>
            ))}
          </div>
        </>
      ) : state.gameMode === "HEX" ? (
        <>
          <h2>{`Hex #${correctOption}`}</h2>
          <div className="options-container">
            {colorValues.map((HEXValue, i) => (
              <button
                id={HEXValue}
                onClick={() => chooseHEXOption(HEXValue, i)}
                key={i}
                className="option-button"
                style={{
                  backgroundColor: "#" + HEXValue,
                  visibility: hiddenButtons.includes(i) ? "hidden" : "visible",
                }}
              ></button>
            ))}
          </div>
        </>
      ) : state.gameMode === "HSL" ? (
        <>
          <h2>{formatHSL(correctOption)}</h2>
          <div className="options-container">
            {colorValues.map((HSLValue, i) => (
              <button
                id={HSLValue}
                onClick={() => chooseHSLOption(HSLValue, i)}
                key={i}
                className="option-button"
                style={{
                  backgroundColor: "hsl(" + HSLValue + ")",
                  visibility: hiddenButtons.includes(i) ? "hidden" : "visible",
                }}
              ></button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>No game mode</p>
        </>
      )}
      {state.gameMode === "RGB" ? <RgbTutorial /> : state.gameMode === "HEX" ? <HexTutorial /> : <HslTutorial />}
    </div>
  );
}

export default Game;
