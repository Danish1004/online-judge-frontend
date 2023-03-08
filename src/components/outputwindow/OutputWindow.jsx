import React from "react";
import "./OutputWindow.css";
const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="text-err">{atob(outputDetails?.compile_output)}</pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="txt-scs">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return <pre className="text-err">{`Time Limit Exceeded`}</pre>;
    } else {
      return <pre className="text-err">{atob(outputDetails?.stderr)}</pre>;
    }
  };
  return (
    <>
      <h1 className="text-in">Output</h1>
      <div className="details">{outputDetails ? <>{getOutput()}</> : null}</div>
    </>
  );
};

export default OutputWindow;
