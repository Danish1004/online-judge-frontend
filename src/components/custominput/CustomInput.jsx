import React from "react";
import { classnames } from "../../utils/general";
import "./CustomInput.css";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames("input")}
      ></textarea>
    </>
  );
};

export default CustomInput;
