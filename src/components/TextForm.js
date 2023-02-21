import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    var vText = text.toUpperCase(); 
    setText(vText);
  };

  const handleLowClick = () => {
    var vText = text.toLowerCase(); 
    setText(vText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container"> 
      <h1>Enter the text below</h1>
      <textarea
        id="txtBox"
        cols="150"
        value={text}
        rows="10"
        onChange={handleOnChange}
        style={props.textBoxColorInfo}
      ></textarea>
      <button type="button" className={`btn  mx-2 btn-${props.mode}`} onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button type="button" className={`btn  mx-2 btn-${props.mode}`} onClick={handleLowClick}>
        Convert to lowercase
      </button>
      </div>
    </>
  );
}
