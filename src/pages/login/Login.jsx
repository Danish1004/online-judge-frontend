import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="login_container">
        <h1 className="main_heading">Login</h1>
        <div className="login_box">
          <div className="input_area">
            <h3>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <input type="text" required></input>
          </div>
          <div className="input_area">
            <h3>Username</h3>
            <input type="text" required></input>
          </div>
          <div className="input_area">
            <h3>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <input type="email" required></input>
          </div>
          <div className="input_area">
            <h3>Password&nbsp;</h3>
            <input type="password" required></input>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
