import React from "react";
import { Link } from "react-router-dom";
import wave from "../../images/wave.png";
import join from "../../images/bg.svg";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={join} alt="join" />
        </div>
        <div className="login-content">
          <div className="form-box">
            <div className="form-value">
              <form action="">
                <h2 className="title">Welcome </h2>
                <div className="inputbox">
                  <input type="email" required />
                  <label>Email</label>
                </div>
                <div className="inputbox">
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <input type="submit" className="btn" value="Login"></input>
                <div className="register">
                  <p className="one1">
                    Don't have a account <Link to="/">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
