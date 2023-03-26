import React from "react";
import "./Profile.css";
import Header from "../../components/header/Header";
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
          <form className="info-card">
            <h2>General Information</h2>
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
                <h5 className="sub-info">Email</h5>
                <input type="email"></input>
              </div>
              <div className="sub-head">
                <h5 className="sub-info">Phone Number</h5>
                <input type="tel"></input>
              </div>
            </div>
            <div className="heading-1">
              <div className="sub-head">
                <h5 className="sub-info">Gender</h5>
                <input type="text"></input>
              </div>
              <div className="sub-head">
                <h5 className="sub-info">Birth Date</h5>
                <input type="date"></input>
              </div>
            </div>
            <div className="address-col">
              <h2>Address</h2>
              <div className="heading-1">
                <div className="sub-head2">
                  <h5 className="sub-info">Address</h5>
                  <input type="text"></input>
                </div>
                <div className="sub-head3">
                  <h5 className="sub-info">Flat/House No.</h5>
                  <input type="text"></input>
                </div>
              </div>
              <div className="heading-1">
                <div className="sub-head4">
                  <h5 className="sub-info">City</h5>
                  <input type="text"></input>
                </div>
                <div className="sub-head4">
                  <h5 className="sub-info">State</h5>
                  <input type="text"></input>
                </div>
                <div className="sub-head4">
                  <h5 className="sub-info">Pincode.</h5>
                  <input type="postal"></input>
                </div>
              </div>
            </div>
            <div className="">
              <input
                type="submit"
                // onClick={handleSubmit}
                className="btn-2"
                value="Save All"
              ></input>
            </div>
          </form>
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
