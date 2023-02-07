import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [Toggle, ShowMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          semicolon
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-question-circle nav_icon"></i> Problems
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> Editor
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> Leaderboard
              </a>
            </li>
            <li className="nav_item">
              <a href="profile" className="nav_link">
                Profile
              </a>
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
