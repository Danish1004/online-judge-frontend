import React, { useState, useEffect } from "react";
import "./Profile.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import banner from "../../images/banner.jpeg";
import user from "../../images/user1.png";
import withAuth from "../../routes/withAuth";

const Profile = (props) => {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const fetchUserData = async () => {
    var myHeaders = new Headers();
    var token = localStorage.getItem("jwtToken");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("https://semicolon.herokuapp.com/api/user", requestOptions)
      .then((response) => {
        response.json().then((value) => {
          setUserData(value);
        });
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleInputChange = async (event) => {
    event.preventDefault();

    var token = localStorage.getItem("jwtToken");

    const headers = {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
      redirect: "follow",
    };

    const data = JSON.stringify({
      profile: {
        name: name,
        email: email,
        gender: gender,
        contact_number: number,
      },
    });

    const response2 = await fetch("https://semicolon.herokuapp.com/api/user", {
      method: "POST",
      headers: headers,
      body: data,
    });

    fetchUserData();
    setUserData(response2);
  };

  return (
    <div className="main">
      <div className="profile-header">
        <Header />
      </div>
      <div className="main-box">
        <div className="profile-content">
          <form className="info-card" onSubmit={handleInputChange}>
            <h2>General Information</h2>
            <div className="heading-1">
              <div className="sub-head">
                <h5 className="sub-info">Name</h5>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="sub-head">
                <h5 className="sub-info">Email</h5>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="sub-head">
                <h5 className="sub-info">Phone Number</h5>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="sub-head">
                <h5 className="sub-info">Gender</h5>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="sub-head">
                <h5 className="sub-info">Birth Date</h5>
                <input
                  type="date"
                  name="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <input type="submit" className="btn-2" value="Save All" />
            </div>
          </form>
          {/* new div */}
          <div className="details-card">
            <div className="image-banner">
              <img src={banner} alt="background" />

              <img src={user} alt="userimg" />
            </div>
            <div className="user-info">
              <h2>{userData?.profile?.name}</h2>
              <h3>{userData?.profile?.username}</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(Profile);
