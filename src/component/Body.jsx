import React, { useState } from "react";

function Body(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCTClick = () => {
    setText("");
    props.showAlert("Cleared text", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
      <div style={{ 
        color: props.mode === "dark" ? "white" : "black" }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "white",
              color:"black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-outline-primary mx-1 my-1 " onClick={handleUpClick}>
          To Uppercase
        </button>
        <button disabled = {text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleLoClick}>
          To Lowercase
        </button>
        <button disabled = {text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled = {text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled = {text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCTClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((e) => {return e.length!==0}).length} words + {text.length} characters
        </p>
        <p>Needs {0.008 * text.split(" ").filter((e) => {return e.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box to preview it here"}</p>
      </div>
      </div>
    </>
  );
}

export default Body;
