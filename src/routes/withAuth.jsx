import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isLoggedIn = Cookies.get("loggedIn") === "true";
    if (isLoggedIn) {
      return <Component />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return AuthRoute;
};

export default withAuth;
