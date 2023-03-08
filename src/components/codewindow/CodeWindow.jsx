import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "./CodeWindow.css";

const CodeWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="editor">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="hello"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeWindow;
