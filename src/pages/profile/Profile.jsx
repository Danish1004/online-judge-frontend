import React from "react";
import "./Profile.css";
import Header from "../../components/header/Header";
const Profile = () => {
  return (
    <div className="main">
      <Header />
      <div className="profile_container">
        <div className="box1">
          <div className="profile-card">
            <h1>Name</h1>
            <h3>About</h3>
            <h3>about 2</h3>
          </div>
        </div>
        <div className="box2">Box2</div>
        <div className="box3">BOX3</div>
      </div>
    </div>
  );
};

export default Profile;
