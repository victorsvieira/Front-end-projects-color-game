import React, { useContext } from "react";
import "./tutorials.css";
import { GameContext } from "../../App";

function RgbTutorial() {
  const { state } = useContext(GameContext);
  return (
    <>
      {state.language === "EN" ? (
        <div className="tutorial">
          <h4>RGB</h4>
          <h5>RGB stands for Red, Green, and Blue — the three primary colors of light used to create every color on a screen.</h5>
          <p>Each color is represented by three numbers, like this: RGB(120, 200, 150)</p>
          <ul>
            <li>The first number (120) controls how much red there is.</li>
            <li>The second number (200) controls how much green there is.</li>
            <li>The third number (150) controls how much blue there is.</li>
          </ul>
          <p>Values range from 0 to 255 — the higher the number, the stronger that color's intensity.</p>
          <img src="https://instrucoes.cartoesmaisbarato.com.br/wp-content/uploads/2021/12/img_01.jpg" alt="" />
        </div>
      ) : state.language === "PT" ? (
        <div className="tutorial">
          <h4>RGB</h4>
          <h5>RGB significa Red (Vermelho), Green (Verde) e Blue (Azul) - as 3 cores primárias usadas para criar qualquer combinação de outras cores.</h5>
          <p>Cada cor é representada por 3 número, por exemplo: RGB(120, 200, 150)</p>
          <ul>
            <li>O primeiro número (120) diz a quantidade de vermelho.</li>
            <li>O segundo número (200) diz a quantidade de verde.</li>
            <li>O terceiro número (150) diz a quantidade de azul.</li>
          </ul>
          <p>Valores variam de 0 a 255, quanto maior o número, mais intensidade daquela cor.</p>
          <img src="https://instrucoes.cartoesmaisbarato.com.br/wp-content/uploads/2021/12/img_01.jpg" alt="" />
        </div>
      ) : null}
    </>
  );
}
export default RgbTutorial;
