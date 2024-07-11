import { Routes, Route } from "react-router-dom";
import "./App.css";

import SideBar from "./SideBar/sidebar";
import Header from "./Header/Header";
import Home from "./Pages/Home";
import BrowseCars from "./Pages/BrowseCars";
import MyListings from "./Pages/MyListings";
import MyAccount from "./Pages/MyAccount";
import Support from "./Pages/Support";

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="sidebar-dev">
          <SideBar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browsecars" element={<BrowseCars />} />
            <Route path="/mylistings" element={<MyListings />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
