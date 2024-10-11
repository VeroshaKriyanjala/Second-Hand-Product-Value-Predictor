import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-900">
          Create an Account
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          {/* Left Column */}
          <div>
            <div className="mb-5 text-left">
              <label htmlFor="name" className="block mb-2 text-blue-900">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#274C77]"
              />
            </div>
            <div className="mb-5 text-left">
              <label htmlFor="email" className="block mb-2 text-[#274C77]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#274C77]"
              />
            </div>
          </div>
          {/* Right Column */}
          <div>
            <div className="mb-5 text-left relative">
              <label htmlFor="password" className="block mb-2 text-[#274C77]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#274C77]"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-[#274C77] focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="mb-5 text-left relative">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-[#274C77]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#274C77]"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-blue-900 focus:outline-none"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
          </div>
          {/* Full Width Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded w-full text-lg hover:bg-[#274C77] shadow-md transition-all"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-5 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-900 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
