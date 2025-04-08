import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useLocalStorage from "@hooks/useLocalStorage";

const ProtectedRoute = () => {
  const { getItem } = useLocalStorage();
  const goldToken = getItem("goldAccessToken");

  const isAuthenticated = Boolean(goldToken);
  // console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
