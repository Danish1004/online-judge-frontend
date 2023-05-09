import React, { useState, useEffect } from "react";
import "./Editor.css";
import CodeWindow from "../../components/codewindow/CodeWindow";
import { classnames } from "../../utils/general";
import { languageOptions } from "../../constants/languageOptions";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/Header";

import { defineTheme } from "../../lib/defineTheme";
import useKeyPress from "../../hooks/useKeyPress";
import Footer from "../../components/footer/Footer";
// import OutputWindow from "../../components/outputwindow/OutputWindow";
// import CustomInput from "../../components/custominput/CustomInput";
// import OutputDetails from "../../components/outputdetails/OutputDetails";
import ThemeDropDown from "../../components/themedrop/ThemeDropDown";
import LangDrop from "../../components/langdrop/LangDrop";
import withAuth from "../../routes/withAuth";

const javascriptDefault = `/
* write your code here*/
`;

const Editor = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [problem, setProblem] = useState("");
  const [problemCode, setProblemCode] = useState("");

  const [resp, setResp] = useState([]);
  const [response, setResponse] = useState([]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      handleCompile();
    }
  }, [ctrlPress, enterPress]);

  useEffect(() => {
    const problemCode = localStorage.getItem("problemCode");
    setProblemCode(problemCode);
  }, []);

  useEffect(() => {
    setProblem(localStorage.getItem("problemCode"));
    if (problemCode) {
      fetchData(problemCode);
    }
  }, [problemCode]);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const fetchData = async (problemCode) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("jwtToken")
      );

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/admin/problem/${problemCode}`,
        requestOptions
      );
      const value = await response.json();
      if (value) {
        setResp(value);
      } else {
        console.log("Error: Response did not contain a JSON object.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  //code compiler ke liye
  const handleCompile = () => {
    setProcessing(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("jwtToken")
    );
    var raw = JSON.stringify({
      source_code: code,
      language_id: language.value,
      problem_code: problemCode,
    });
    console.log("yeh ja raha", raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(process.env.REACT_APP_BASE_URL + "/api/submission", requestOptions)
      // .then((response) => response.text())
      .then((response) => {
        response.json().then((value) => {
          setResponse(value);
        });
      })
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log("response", response.verdict);
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  return (
    <>
      <Header />
      {/* <div className="main-head"></div> */}
      <div className="main-content">
        <div className="first-row">
          <LangDrop onSelectChange={onSelectChange} />
        </div>
        <div className="first-row">
          <ThemeDropDown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className="window-main">
        <div className="problem-window">
          <div
            className="problem-text"
            dangerouslySetInnerHTML={{ __html: resp?.problem?.statement }}
          />

          <h3 className="problem-heading-sub">Input Format:</h3>
          <div
            className="problem-text"
            dangerouslySetInnerHTML={{ __html: resp?.problem?.inputFormat }}
          />
          <h3 className="problem-heading-sub">Output Format:</h3>
          <div
            className="problem-text"
            dangerouslySetInnerHTML={{ __html: resp?.problem?.outputFormat }}
          />
          <h3 className="problem-heading-sub">Constraints:</h3>
          <div
            className="problem-text"
            dangerouslySetInnerHTML={{ __html: resp?.problem?.constraints }}
          />
          <h3 className="problem-heading-sub">Explanation:</h3>
          <div
            className="problem-text"
            dangerouslySetInnerHTML={{ __html: resp?.problem?.explanation }}
          />
          <h4 className="problem-heading-sub">Time Limit:</h4>
          <div
            className="problem-text"
            dangerouslySetInnerHTML={{ __html: resp?.problem?.timeLimit }}
          />
          <h4 className="problem-heading-sub">Memory Limit:</h4>
          <div
            className="problem-text"
            dangerouslySetInnerHTML={{ __html: resp?.problem?.memoryLimit }}
          />
        </div>
        {/*editor window */}
        <div className="editor-window">
          <CodeWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
          <div className="output-section">
            <div className="result-section">
              <div className="solution-result">
                <h4 className="solution-heading-sub">Status:</h4>
                <p>{response.verdict}</p>
              </div>
              <div className="solution-result">
                <h4 className="solution-heading-sub">Time:</h4>
                <p>{response.time}</p>
              </div>
              <div className="solution-result">
                <h4 className="solution-heading-sub">Memory:</h4>
                <p>{response.memory}</p>
              </div>
            </div>
            <button
              onClick={handleCompile}
              disabled={!code}
              className={classnames("buttons", !code ? "depth" : "")}
            >
              {"Compile and Execute"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withAuth(Editor);
