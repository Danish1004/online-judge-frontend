import React, { useState } from "react";
import "./Registration.css";
const Registration = () => {
  return (
    <div className="main">
      <div className="login_container">
        <h1 className="main_heading">Register</h1>
        <div className="login_box">
          <div className="input_area">
            <h3>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <input type="text" id="name" required></input>
          </div>
          <div className="input_area">
            <h3>Username</h3>
            <input type="text" id="username" required></input>
          </div>
          <div className="input_area">
            <h3>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <input type="email" id="email" required></input>
          </div>
          <div className="input_area">
            <h3>Password&nbsp;</h3>
            <input type="password" id="password" required></input>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
