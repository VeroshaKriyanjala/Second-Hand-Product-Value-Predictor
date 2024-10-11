import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";

function FirstSignIn() {
  return (
    <div
      className="h-screen overflow-hidden flex justify-center items-center rounded-[20px] mx-1"
      style={{ backgroundColor: "#F8F8FB" }}
    >
      <h1 className="text-[#274C77] text-xl font-bold">
        First Need to{" "}
        <Link to="/login" element={Login} className="text-[#274C77] underline">
          SignIn
        </Link>{" "}
        Or{" "}
        <Link
          to="/signup"
          element={SignUp}
          className="text-[#274C77] underline"
        >
          SignUp
        </Link>
      </h1>
    </div>
  );
}

export default FirstSignIn;
