import React, { useState } from "react";
import { Link } from "react-router-dom";
import wave from "../../images/wave.png";
import join from "../../images/bg.svg";
import "./Login.css";
import Header from "../../components/header/Header";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState("");

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJmNTE4OGZjNy0zYTAxLTRhNjMtYjczOS00NzcwYjc0NTBkZjgiLCJpYXQiOjE2Nzk1ODg0NjAsImV4cCI6MTY3OTY3NDg2MH0.nJ_7tDSyXf5r2bqX5h12WdfxFndqHK9u4kXxvCRzJrs"
  );
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://semicolon.herokuapp.com/api/auth/signin", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        username,
        password,
      }),
      redirect: "follow",
    })
      .then((response) => {
        response.json().then((value) => {
          console.log(value.message);
          setResp(value.message);
        });
      })
      .then((result) => result)
      .catch((error) => error);
  };
  return (
    <div>
      <Header />
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
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label>Username</label>
                </div>
                <div className="inputbox">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label>Password</label>
                </div>
                <input
                  type="submit"
                  onClick={handleSubmit}
                  className="btn"
                  value="Login"
                ></input>
                <div className="register">
                  <p className="one1">
                    Don't have a account <Link to="/">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="line">
            <h5 className="response-line"> {resp} </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
