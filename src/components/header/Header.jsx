import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [Toggle, ShowMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav_container">
        <a href="index.html" className="nav_logo">
          semicolon
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <Link to="/home" className="nav_link active-link">
                <i className="uil uil-question-circle nav_icon"></i> Problems
              </Link>
            </li>

            <li className="nav_item">
              <Link to="/editor" className="nav_link">
                <i className="uil uil-user nav_icon"></i> Editor
              </Link>
            </li>

            <li className="nav_item">
              <Link to="/home" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> Leaderboard
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/profile" className="nav_link">
                Profile
              </Link>
            </li>
          </ul>

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
