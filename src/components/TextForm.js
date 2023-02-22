import React, { useState,useEffect } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
      var vText = text.toUpperCase();
      setText(vText);
    }
  };

  const handleLowClick = () => {
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
      var vText = text.toLowerCase();
      setText(vText);
    }
  };

  const handleClearClick = () => {
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
      var vText = "";
      setText(vText);
    }
  };

  const handleUpsideDownClick = () => {};

  const handleSortWordClick = () => {
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
      var sortedNames = text
      .trim()
      .split(/\s/)
      .filter(function (element) {
        return element !== "";
      })
      .sort()
      .toString()
      .replaceAll(",", " ");
    setText(sortedNames);
    }

  };

  const handleSpeak = ()=>{
    if(text.length===0) props.showAlert("Enter something!","warning");
    else{
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    }
  }


  //speech
  let mic;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = true;
    mic.lang = 'en-US';
  }

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    setIsListening(true);

    let supported = mic == undefined ? false : true;
    if (!mic) {
      return;
    }
    if (isListening) {
      mic.start();
      console.log('start');
    } else {
      mic.stop();
      console.log('stopeed');
    }

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      //dispatch(textActions.updateText({ text: textState.text + transcript }));
      setText(text+transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

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
        <button
          type="button"
          className={`btn  mx-2 btn-${props.mode}`}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          className={`btn mx-2 btn-${props.mode}`}
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button
          type="button"
          className={`btn  mx-2 btn-${props.mode}`}
          onClick={handleUpsideDownClick}
        >
          Upside Down
        </button>
        <button
          type="button"
          className={`btn  mx-2 btn-${props.mode}`}
          onClick={handleSpeak}
        >
          Speak
        </button>
        <button
          type="button"
          className={`btn  mx-2 btn-${props.mode}`}
          onClick={handleSortWordClick}
        >
          Sort Words
        </button>
        <button
          type="button"
          className={`btn  mx-2 btn-${props.mode}`}
          onClick={handleListen}
        >
          Listen
        </button>
        <button
          type="button"
          className={`btn  mx-2 btn-${props.mode}`}
          onClick={handleClearClick}
        >
          Clear
        </button>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : 'Nothing to preview!!'}
        </p>
      </div>
    </>
  );
}
