import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./Firebase-config";

function ProtectedRoute({ children }) {
  const isLoggedIn = auth.currentUser;

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
