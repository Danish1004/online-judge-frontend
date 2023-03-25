import React from "react";
import "./Profile.css";
import Header from "../../components/header/Header";
import "./Profile.css";
import Footer from "../../components/footer/Footer";
// import user from "../../images/user1.png";
// import edit from "../../images/edit.png";
const Profile = () => {
  return (
    <div className="main">
      <div className="profile-header">
        <Header />
      </div>
      <div className="main-box">
        <div className="profile-content">
          <div className="info-card">
            <h3>General Information</h3>
            <div className="heading-1">
              <div className="sub-head">
                <h5 className="sub-info">First Name</h5>
                <input type="text"></input>
              </div>
              <div className="sub-head">
                <h5 className="sub-info">Last Name</h5>
                <input type="text"></input>
              </div>
            </div>
            <div className="heading-1">
              <div className="sub-head">
                <h5>Email</h5>
                <input type="email"></input>
              </div>
              <div className="sub-head">
                <h5>Phone Number</h5>
                <input type="tel"></input>
              </div>
            </div>
          </div>
          {/* new div */}
          <div className="details-card">
            <h5 className="heading-main">Information</h5>
            <div className="info-1">
              <div className="col">
                <div className="heading-2">Email</div>
                <div className="info-2">test@gmail.com</div>
              </div>

              <div className="col">
                <div className="heading-2">Phone</div>
                <div className="info-2">00000 00000</div>
              </div>
            </div>
            <div className="info-1">
              <div className="col">
                <div className="heading-2">Test</div>
                <div className="info-2">test@gmail.com</div>
              </div>

              <div className="col">
                <div className="heading-2">Test2</div>
                <div className="info-2">00000 00000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
