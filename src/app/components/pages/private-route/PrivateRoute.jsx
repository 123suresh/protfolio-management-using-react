import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth-context/Authentication";

function PrivateRoute() {
  const { auth } = useContext(AuthContext);

  return <div>{auth ? <Outlet /> : <Navigate to="/" />}</div>;
}

export default PrivateRoute;
