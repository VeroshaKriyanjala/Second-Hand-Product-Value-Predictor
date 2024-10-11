import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Predict from "./Pages/Predict";
import BrowseCars from "./Pages/BrowseCars";
import MyListings from "./Pages/MyListings";
import MyAccount from "./Pages/MyAccount";
import AboutUs from "./Pages/AboutUs";
import NewCar from "./Components/NewCar";
import Inventory from "./Components/Inventory";
import DashBoard from "./Pages/DashBoard";
import Footer from "./Components/Footer";
import Promotion from "./Components/Promotion";
import Services from "./Components/Services";
import Brands from "./Components/Brands";
import { useGlobalContext } from "./context/GlobalContextProvider";
import ProtectedRoute from "./context/ProtectedRoute";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const { isLogged, setIsLogged } = useGlobalContext();
  const location = useLocation();

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <>
      <Header onAuthentication={isLogged} onLogout={handleLogout} />
      <main className="">
        {location.pathname === "/" && (
          <>
            <Inventory />
            <Brands />
            <Services />
            <Promotion />
            <Footer />
          </>
        )}
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              <DashBoard onAuthentication={isLogged} onLogin={handleLogin} />
            }
          >
            <Route path="predict" element={<Predict />} />
            <Route path="browsecars" element={<BrowseCars />} />
            <Route
              path="mylistings"
              element={
                <ProtectedRoute>
                  <MyListings />
                </ProtectedRoute>
              }
            />
            <Route
              path="mylistings/newcar"
              element={
                <ProtectedRoute>
                  <NewCar />
                </ProtectedRoute>
              }
            />
            <Route
              path="myaccount"
              element={
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>
              }
            />

            <Route path="aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

/* <div className="layout">
        {!hideSidebar && (
          <div className="sidebar-dev">
            <SideBar />
          </div>
        )}
        <div
          className={`main-content ${isAuthenticated ? "with-sidebar" : ""}`}
        >
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp onSignUp={handleLogin} />} />
            <Route path="/" element={<Predict />} />
            <Route path="/browsecars" element={<BrowseCars />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {isAuthenticated ? (
              <>
                <Route path="/mylistings" element={<MyListings />}>
                  <Route path="/mylistings/newcar" element={<NewCar />} />
                </Route>
                <Route path="/myaccount" element={<MyAccount />} />
              </>
            ) : (
              <Route path="*" element={<FirstSignIn />} />
            )}
          </Routes>
        </div>
      </div> */
