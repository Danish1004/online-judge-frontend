import React from "react";
import "./Profile.css";
import Header from "../../components/header/Header";
import "./Profile.css";
import user from "../../images/user1.png";
import edit from "../../images/edit.png";
const Profile = () => {
  return (
    <div className="main">
      <Header />

      <div className="main-box">
        <div className="profile-content">
          <div className="pic-card">
            <img src={user} alt="user"></img>
            <h3 className="name">Test 1</h3>
            <h4 className="username">test1</h4>
            <i className="icon">
              <img src={edit} alt="edit" />
            </i>
          </div>
          <div className="info-card">sdsd</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
