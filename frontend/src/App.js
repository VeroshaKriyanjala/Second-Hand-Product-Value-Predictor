import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./SideBar/sidebar";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import BrowseCars from "./Pages/BrowseCars/BrowseCars";
import MyListings from "./Pages/MyListings/MyListings";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Support from "./Pages/Support";
import Login from "./Pages/Auth/login";
import SignUp from "./Pages/Auth/signup";
import FirstSignIn from "./Pages/firstsigninpage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header onAuthentication={isAuthenticated} onLogout={handleLogout} />
      <div className="layout">
        <div className="sidebar-dev">
          <SideBar />
        </div>
        <div
          className={`main-content ${isAuthenticated ? "with-sidebar" : ""}`}
        >
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp onSignUp={handleLogin} />} />
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            {isAuthenticated ? (
              <>
                <Route path="/browsecars" element={<BrowseCars />} />
                <Route path="/mylistings" element={<MyListings />} />
                <Route path="/myaccount" element={<MyAccount />} />
              </>
            ) : (
              // <p>You need to sign in first</p>
              <Route path="*" element={<FirstSignIn />} />
              // <Route path="*" element={<Login onLogin={handleLogin} />} />
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
