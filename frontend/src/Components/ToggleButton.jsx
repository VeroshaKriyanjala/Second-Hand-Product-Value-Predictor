import React from "react";
import { useState } from "react";
import "./components.css";

function ToggleButton() {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div className="button-dev">
        <button
          className={`toggle-button ${toggled ? "toggled" : ""}`}
          onClick={() => setToggled(!toggled)}
        >
          <div className="thumb"></div>
        </button>
      </div>
      {console.log(toggled)}
    </>
  );
}

export default ToggleButton;
