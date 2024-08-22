import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const handleSubmit = (e) => {};
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="./signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
