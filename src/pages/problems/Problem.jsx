import React, { useState, useEffect } from "react";
import "./Problem.css";
import Header from "../../components/header/Header";

const Problem = () => {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("jwtToken")
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      process.env.REACT_APP_BASE_URL + "/api/admin/problem/",
      requestOptions
    )
      .then((response) => {
        response.json().then((value) => {
          setResp(value);
        });
      })
      .catch((error) => console.log("error", error));
  }, []);
  const data = resp.problem || [];

  const Card = ({ problem }) => (
    <div className="card">
      <h3 className="card-title">{problem.name}</h3>
      <div className="card-body">
        <p className="card-text">Type: {problem.tags}</p>
        <p className="card-text">Difficulty: {problem.difficulty}</p>
        <button>Solve Challenge</button>
      </div>
    </div>
  );

  return (
    <div className="main-problems">
      <div className="problem-header">
        <Header />
      </div>
      <div className="problems-box">
        <div className="problems-list">
          {data.map((problem, index) => (
            <Card key={index} problem={problem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problem;
