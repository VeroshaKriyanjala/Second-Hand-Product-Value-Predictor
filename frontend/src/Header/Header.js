import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ onAuthentication, onLogout }) {
  // const handleLogout = () => {
  //   console.log("Logout");
  // };

  return (
    <header className="Header">
      <div className="company_name">
        <span>Second Hand Product Value Predictor</span>
      </div>
      <div className="profile_details">
        {onAuthentication && (
          <>
            <span>
              <img src="assets/images.jpeg" alt="" />
            </span>
            <span>My Account</span>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
        {!onAuthentication && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
