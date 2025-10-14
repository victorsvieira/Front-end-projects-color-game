import React, { useContext } from "react";
import { GameContext } from "../../App";
import "./tutorials.css";

function HslTutorial() {
  const { state } = useContext(GameContext);
  return (
    <>
      {state.language === "EN" ? (
        <div className="tutorial">
          <h4>HSL</h4>
          <h5>HSL stands for Hue, Saturation, and Lightness.</h5>
          <p>Example: HSL(200°, 80%, 50%)</p>
          <ul>
            <li>Hue (200°) → The type of color on the color wheel (0° = red, 120° = green, 240° = blue).</li>
            <li>Saturation (80%) → How intense or vivid the color is (0% = gray, 100% = full color).</li>
            <li>Lightness (50%) → How bright or dark the color is (0% = black, 50% = normal, 100% = white).</li>
          </ul>
          <p>By combining these three values, you can create any color!</p>
          <img src="https://arquivo.devmedia.com.br/artigos/Joel_Rodrigues/CSS3/colors/colors5.png" alt="" />
        </div>
      ) : state.language === "PT" ? (
        <div className="tutorial">
          <h4>HSL</h4>
          <h5>HSL significa Matiz (Hue), Saturação (Saturation) e Luminosidade (Lightness).</h5>
          <p>Exemplo: HSL(200°, 80%, 50%)</p>
          <ul>
            <li>Matiz (200°) → O tipo de cor no círculo cromático (0° = vermelho, 120° = verde, 240° = azul).</li>
            <li>Saturação (80%) → O quão intensa ou vívida é a cor (0% = cinza, 100% = cor pura).</li>
            <li>Luminosidade (50%) → O quão clara ou escura é a cor (0% = preto, 50% = normal, 100% = branco).</li>
          </ul>
          <p>Combinando esses três valores, é possível criar qualquer cor!</p>
          <img src="https://arquivo.devmedia.com.br/artigos/Joel_Rodrigues/CSS3/colors/colors5.png" alt="" />
        </div>
      ) : null}
    </>
  );
}

export default HslTutorial;
