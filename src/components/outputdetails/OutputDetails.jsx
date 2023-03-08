import React from "react";
import "./OutputDetails.css";

const OutputDetails = ({ OutputDetails }) => {
  return (
    <div className="main-output">
      <p className="txt-p">
        Status:{" "}
        <span className="span-out">{OutputDetails?.status?.description}</span>
      </p>
      <p className="txt-p">
        Memory: <span className="span-out">{OutputDetails?.memory}</span>
      </p>
      <p className="txt-p">
        Time: <span className="span-out">{OutputDetails?.time}</span>
      </p>
    </div>
  );
};

export default OutputDetails;
