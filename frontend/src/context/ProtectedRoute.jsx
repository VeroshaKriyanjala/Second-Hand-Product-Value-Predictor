import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContextProvider";

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useGlobalContext();

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
