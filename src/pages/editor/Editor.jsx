import React, { useState, useEffect } from "react";
import "./Editor.css";
import CodeWindow from "../../components/codewindow/CodeWindow";
import axios from "axios";
import { classnames } from "../../utils/general";
import { languageOptions } from "../../constants/languageOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/Header";

import { defineTheme } from "../../lib/defineTheme";
import useKeyPress from "../../hooks/useKeyPress";
import Footer from "../../components/footer/Footer";
import OutputWindow from "../../components/outputwindow/OutputWindow";
import CustomInput from "../../components/custominput/CustomInput";
import OutputDetails from "../../components/outputdetails/OutputDetails";
import ThemeDropDown from "../../components/themedrop/ThemeDropDown";
import LangDrop from "../../components/langdrop/LangDrop";
import withAuth from "../../routes/withAuth";

const javascriptDefault = `/*
* write your code here*/


`;

const Editor = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [problem, setProblem] = useState("");
  const [problemCode, setProblemCode] = useState("");

  const [resp, setResp] = useState([]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      // handleCompile();
      //isko dekh lena ek baar
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

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
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

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <button
            onClick={handleCompile}
            disabled={!code}
            className={classnames("buttons", !code ? "depth" : "")}
          >
            {processing ? "Processing..." : "Compile and Execute"}
          </button>
        </div>
      </div>
      <div className="collective-main">
        {/* <div className="input-win">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
        </div>
        <div className="windows-combine">
          <OutputWindow outputDetails={outputDetails} />
        </div>

        {/* {outputDetails && <OutputDetails outputDetails={outputDetails} />} */}
      </div>{" "}
      <Footer />
    </>
  );
};

export default withAuth(Editor);
