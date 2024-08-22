import React from "react";
import { Link } from "react-router-dom";
import Login from "./Auth/login";
import SignUp from "./Auth/signup";

function FirstSignIn() {
  return (
    <div>
      <h1>
        First Need to{" "}
        <Link to="/login" element={Login}>
          SignIn
        </Link>{" "}
        Or{" "}
        <Link to="/login" element={SignUp}>
          SignUp
        </Link>
      </h1>
    </div>
  );
}

export default FirstSignIn;
