import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
function PrivateRoutes() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
