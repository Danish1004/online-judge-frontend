import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="login_container">
        <h1 className="main_heading">Login</h1>
        <div className="login_box">
          <h3>Username</h3>
          <input type="text" required></input>
          <h3>Password</h3>
          <input type="password" required></input>
        </div>
      </div>
    </div>
  );
};

export default Login;
