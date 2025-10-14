import React, { useContext } from "react";
import { GameContext } from "../../App";
import "./tutorials.css";

function HexTutorial() {
  const { state } = useContext(GameContext);
  return (
    <>
      {state.language === "EN" ? (
        <div className="tutorial">
          <h4>HEX</h4>
          <h5>Hexadecimal colors use six characters to describe a color, like this: #3FA9F5</h5>
          <p>Each pair of characters represents Red, Green, and Blue, in that order:</p>
          <ul>
            <li>#3F → Red</li>
            <li>#A9 → Green</li>
            <li>#F5 → Blue</li>
          </ul>
          <p>
            The values go from 00 (none) to FF (maximum) in hexadecimal — a base-16 system using numbers 0–9 and letters A–F (A-F would be equivalent to numbers
            10-15).
          </p>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4HHdaRxp9gelspRdZMz27m_h8V1gYYmnWNYXeNeQFCCRQU1Z5AhAZ0bILmF74r5czgObJMWsUDc6_M1eDpACyHv6mFbVGA9e0C3KKBSIuYDQOILNuQS0-5em2zg20LokBF2IEyv-oRHxsZpU17J3xN6cHd5U8wQTmxZraMyl8K8ELBqVL_dRZaj0o1Q/s16000-rw/ENADE%202022%20QUEST%C3%83O%20IMAGEM%20159.jpg"
            alt=""
          />
        </div>
      ) : state.language === "PT" ? (
        <div className="tutorial">
          <h4>HEX</h4>
          <h5>As cores em Hexadecimal usam 6 caracteres para descrever uma cor, por exemplo: #3FA9F5</h5>
          <p>Cada par de caracteres representa o vermelho, verde e o azul, nessa ordem:</p>
          <ul>
            <li>#3F → alguma instensidade de vermelho</li>
            <li>#A9 → alguma instensidade de verde</li>
            <li>#F5 → alguma instensidade de azul</li>
          </ul>
          <p>
            Os valores variam de 00 (nada) até FF (máximo) em hexadecimal, ou seja, esse sistema usa números de 0-9 e letras de A-F (as letras de A-F seriam o
            equivalente aos números de 10-15).
          </p>
          <p>A sequência numérica da base hexadecimal é 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F.</p>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4HHdaRxp9gelspRdZMz27m_h8V1gYYmnWNYXeNeQFCCRQU1Z5AhAZ0bILmF74r5czgObJMWsUDc6_M1eDpACyHv6mFbVGA9e0C3KKBSIuYDQOILNuQS0-5em2zg20LokBF2IEyv-oRHxsZpU17J3xN6cHd5U8wQTmxZraMyl8K8ELBqVL_dRZaj0o1Q/s16000-rw/ENADE%202022%20QUEST%C3%83O%20IMAGEM%20159.jpg"
            alt=""
          />
        </div>
      ) : null}
    </>
  );
}

export default HexTutorial;
