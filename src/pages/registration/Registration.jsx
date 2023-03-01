import React, { useState } from "react";
import "./Registration.css";
import wave from "../../images/wave.png";
import join from "../../images/bg.svg";
const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={join} alt="join" />
        </div>
        <div className="login-content">
          {/* <h2 className="title">Register </h2> */}
          <div className="form-box">
            <div className="form-value">
              <form action="">
                <div className="inputbox">
                  <input type="text" required />
                  <label>Name</label>
                </div>
                <div className="inputbox">
                  <input type="text" required />
                  <label>UserName</label>
                </div>
                <div className="inputbox">
                  <input type="email" required />
                  <label>Email</label>
                </div>
                <div className="inputbox">
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <input type="submit" className="btn" value="Register"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
