import React, { useState } from "react";
import { Link } from "react-router-dom";
import wave from "../../images/wave.png";
import join from "../../images/bg.svg";
import "./Login.css";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState("");
  const navigate = useNavigate();

  var myHeaders = new Headers();

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
          if (value.success === true) {
            localStorage.setItem("jwtToken", value.token);
            setUsername(username); // Setting the username in the state
            Cookies.set("tokennew", value.token, { expires: 2 });
            Cookies.set("loggedIn", "true", { expires: 2 });
            Cookies.set("userData", JSON.stringify({ username }), {
              expires: 2,
            }); // Storing the username in the cookie
            setTimeout(() => {
              navigate("/home");
            }, 500);
            console.log(`Logged in as ${username}`);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
