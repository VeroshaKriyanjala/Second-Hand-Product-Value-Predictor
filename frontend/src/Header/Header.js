import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="company_name">
        <span>Second Hand Product Value Predictor</span>
      </div>
      <div className="profile_details">
        <span>Hello Chamod !</span>
        <span>
          <img src="assets/images.jpeg" alt="" />
        </span>
      </div>
    </header>
  );
}

export default Header;
