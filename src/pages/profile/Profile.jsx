import React from "react";
import "./Profile.css";
import Header from "../../components/header/Header";
import "./Profile.css";
import user from "../../images/user1.png";
const Profile = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-box">
        <div className="profile-content">
          <div className="card-content">
            <div className="img">
              <img src={user} alt="user"></img>
            </div>
            <h3>Name</h3>
            <h4>Test</h4>
          </div>
          <div className="card-content">
            <h3>Username</h3>
            <h4>test1</h4>
          </div>
          <div className="card-content">
            <h3>Email</h3>
            <h4>test@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
