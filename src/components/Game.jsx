import React, { useState, useEffect } from "react";
import "./Game.css";

function Game() {
  const [RGBValues, setRGBValues] = useState([[]]);
  const [correctOption, setCorrectOption] = useState([]);
  const [nextRound, setNextRound] = useState(false);
  const [hiddenButtons, setHiddenButtons] = useState([]);

  useEffect(() => {
    let values = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        values[i][j] = Math.floor(Math.random() * 256);
      }
    }
    setRGBValues(values);
    const correctOption = values[Math.floor(Math.random() * 5)];
    setCorrectOption(correctOption);
    setHiddenButtons([]);
  }, [nextRound]);

  function chooseoption(rbgValue, index) {
    if (rbgValue === correctOption) {
      setNextRound(!nextRound);
    } else {
      setHiddenButtons((prev) => [...prev, index]);
    }
  }

  return (
    <div className="game-main-content">
      <h2>
        {"Rgb (" +
          correctOption[0] +
          ", " +
          correctOption[1] +
          ", " +
          correctOption[2] +
          ")"}
      </h2>
      <div className="options-container">
        {RGBValues.map((rbgValue, i) => (
          <button
            id={rbgValue}
            onClick={() => chooseoption(rbgValue, i)}
            key={i}
            className="option-button"
            style={{
              backgroundColor:
                "rgb(" +
                rbgValue[0] +
                "," +
                rbgValue[1] +
                "," +
                rbgValue[2] +
                ")",
              visibility: hiddenButtons.includes(i) ? "hidden" : "visible",
            }}
          ></button>
        ))}
      </div>
      <div className="game-information">
        {'To interpret an RGB color, use three numbers, typically from 0 to 255, to represent the intensity of red, green, and blue light. The first number is for red, the second for green, and the third for blue. A value of \(0\) means that color is off, and \(255\) means it is at full intensity. By combining these values, you can create any color, with the three primary values combined at full intensity (\(255,255,255\)) resulting in white and all values at zero (\(0,0,0\)) resulting in black'}
      </div>
    </div>
  );
}

export default Game;
