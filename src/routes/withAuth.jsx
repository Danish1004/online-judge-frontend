import React from "react";
import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";

const withAuth = (Component) => {
  const AuthRoute = () => {
    var token = localStorage.getItem("jwtToken");
    if (token) {
      return <Component />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return AuthRoute;
};

export default withAuth;
