import React, { useState } from "react";
import "./Registration.css";
const Registration = () => {
  const [name, SetName] = useState("");
  const [username, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  function Register() {}
  return (
    <div className="main">
      <div className="login_container">
        <h1 className="main_heading">Register</h1>
        <div className="login_box">
          <div className="input_area">
            <h3>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => SetName(e.target.value)}
              required
            ></input>
          </div>
          <div className="input_area">
            <h3>Username</h3>
            <input
              type="text"
              value={username}
              onChange={(e) => SetUserName(e.target.value)}
              required
            ></input>
          </div>
          <div className="input_area">
            <h3>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className="input_area">
            <h3>Password&nbsp;</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              required
            ></input>
          </div>
          <button className="submit" onClick={Register} type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
