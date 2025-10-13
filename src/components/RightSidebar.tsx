import React, { useContext } from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div className="right-sidebar-main-content">
      <div className="localization">
        <p>Select language</p>
        <div className="icons-localization">
          <img
            src="https://flagcdn.com/40x30/br.png"
            srcSet="https://flagcdn.com/80x60/br.png 2x,
    https://flagcdn.com/120x90/br.png 3x"
            width="40"
            height="30"
            alt="Brazil"
          />
          <img
            src="https://flagcdn.com/40x30/us.png"
            srcSet="https://flagcdn.com/80x60/br.png 2x,
    https://flagcdn.com/120x90/br.png 3x"
            width="40"
            height="30"
            alt="Brazil"
          />
        </div>
        <div className="difficulty-modes">
          <button>Easy</button>
          <button>Medium</button>
          <button>Hard</button>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
