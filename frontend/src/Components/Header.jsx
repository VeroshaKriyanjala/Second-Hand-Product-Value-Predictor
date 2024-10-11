import React from "react";
import { Link } from "react-router-dom";

const Header = ({ onAuthentication, onLogout }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-20">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-800">
          CARS.com
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-4">
        {/* <Link to="/dashboard" className="text-gray-600 hover:text-black">
          Dashboard
        </Link>

        <Link to="/aboutus" className="text-gray-600 hover:text-black">
          About Us
        </Link> */}
      </nav>

      {/* Authentication Section */}
      <div className="space-x-3 flex items-center">
        {onAuthentication ? (
          <>
            {/* My Account Link */}
            <Link
              to="/myaccount"
              className="text-gray-600 text-sm hover:text-black"
            >
              My Account
            </Link>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login and Signup Links */}
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-[#274C77] hover:border-[#274C77] rounded hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-500 text-white hover:bg-[#274C77] transition rounded"
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
