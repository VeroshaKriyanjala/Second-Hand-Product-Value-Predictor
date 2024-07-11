import React from "react";
import "./components.css";

function Background({ children, className, style }) {
  return (
    <div className={`component-background ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Background;
