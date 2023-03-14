import React, { useState } from "react";
import "./Registration.css";
import wave from "../../images/wave.png";
import join from "../../images/bg.svg";
const Registration = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer null");
  myHeaders.append("Content-Type", "application/json");

  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://semicolon.herokuapp.com/api/auth/signup", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        name,
        username,
        email,
        password,
      }),
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
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
              <form>
                <div className="inputbox">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label>Name</label>
                </div>
                <div className="inputbox">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label>UserName</label>
                </div>
                <div className="inputbox">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label>Email</label>
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
                  onClick={handleClick}
                  className="btn"
                ></input>
              </form>
              <div>{/* <h6>hello</h6> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
