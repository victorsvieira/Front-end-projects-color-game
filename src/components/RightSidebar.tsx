import React, { useContext } from "react";
import "./RightSidebar.css";
import { GameContext } from "../App";

function RightSidebar() {
  const { dispatch } = useContext(GameContext);
  const { state } = useContext(GameContext);

  const changeLanguage = (language: string) => {
    dispatch({ type: language as "LANGUAGE-EN" | "LANGUAGE-PT" });
  };

  // const changeGameDifficulty = (difficulty: string) => {
  //   dispatch({ type: difficulty as "EASY" | "MEDIUM" | "HARD" });
  // };

  return (
    <div className="right-sidebar-main-content">
      <div className="localization">
        {state.language === "EN" ? <p>Language:</p> : state.language === "PT" ? <p>Idioma:</p> : state.language}

        <div className="icons-localization">
          <img onClick={() => changeLanguage("LANGUAGE-PT")} src="https://flagcdn.com/40x30/br.png" width="40" height="30" alt="Brazil" />
          <img onClick={() => changeLanguage("LANGUAGE-EN")} src="https://flagcdn.com/40x30/us.png" height="30" alt="USA" />
        </div>
        {/* <div className="difficulty-modes">
          <button onClick={() => changeGameDifficulty("EASY")}>Easy</button>
          <button onClick={() => changeGameDifficulty("MEDIUM")}>Medium</button>
          <button onClick={() => changeGameDifficulty("HARD")}>Hard</button>
        </div> */}
      </div>
    </div>
  );
}

export default RightSidebar;
