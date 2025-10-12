import React, {useState, useEffect} from "react";
import Game from "./components/Game";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <>
    <div className="all-content" >
      <div className="left-sidebar" >
        <LeftSidebar/>
      </div>
      <div className="main-content">
      <h1>What color is this?</h1>
<Game/>
      </div>
      <div className="right-sidebar">
      <RightSidebar/>
      </div>
    </div>
      
      
    </>
  );
}

export default App;
