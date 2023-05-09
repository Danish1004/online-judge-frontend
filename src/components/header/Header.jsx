import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const [Toggle, ShowMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("jwtToken"); // Remove the token when the user logs out
    Cookies.remove("loggedIn");
    Cookies.remove("userData");
    setLoggedIn(false);
    setUsername("");
    console.clear();
    console.log("User logout successful");

    window.location.href = "/home"; // Redirect to home page after logout
  }

  useEffect(() => {
    const isLoggedIn = Cookies.get("loggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
      const userData = Cookies.get("userData")
        ? Cookies.get("userData")
        : navigate("/home");
      const parsedUserData = JSON.parse(userData);
      const username = parsedUserData.username;
      setUsername(username);
    }
  }, [navigate]);

  return (
    <header className="header">
      <nav className="nav_container">
        <ul>
          <Link to="/home" className="nav_logo">
            semicolon
          </Link>
        </ul>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <Link to="/problem" className="nav_link active-link">
                <i className="uil uil-question-circle nav_icon"></i> Problems
              </Link>
            </li>

            <li className="nav_item">
              <Link to="/leaderboard" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> Leaderboard
              </Link>
            </li>

            <li className="nav_item">
              <Link to="/profile" className="nav_link">
                Profile
              </Link>
            </li>
          </ul>

          <div className="other-side">
            <ul>
              {loggedIn ? (
                <li>
                  Hi, {username}
                  <button onClick={handleLogout}>Logout</button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="nav_link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <i
            className="uil uil-times nav_close"
            onClick={() => ShowMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => ShowMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
