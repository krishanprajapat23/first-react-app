import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //text = 'new text'; //wrong way to change state
  // setText('new text'); //right way to change state and settext is a function

  const handleOnChange = (e) => {
    // console.log("handleOnChange")
    setText(e.target.value);
  };

  //function to make uppercase text
  const handleUC = () => {
    // console.log("toUpperCase fn" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase Successfully", "success")
  };

  //function to make lowercase text
  const handleLC = () => {
    // console.log("toUpperCase fn" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase Successfully", "success")
  };
  //clear the text value
  const clearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text-box cleared", "success");
  };

  //  fn to copy value
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  }
  
  //fn to remove extra space
  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces successfully", "success");
  }

  return (
    <>
      <div className="textform container" style={{color:props.mode === 'dark'? '#fff':'#333'}}>
        <h1 className="heading-form" >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="Textarea1"
            rows="8"
            style={{backgroundColor:props.mode === 'light'? '#fff':'#333', color:props.mode === 'dark'? '#fff':'#333'}}
          ></textarea>
        </div>
        <div className="fn-btn d-flex flex-wrap gap-2 justify-content-start">
          <button disabled={text.length===0} className="btn btn-sm btn-danger" onClick={handleUC}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-sm btn-danger" onClick={handleLC}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-sm btn-danger" onClick={clearText}>
            Clear
          </button>
          <button disabled={text.length===0} className="btn btn-sm btn-danger" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-sm btn-danger" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>
      <div className="container my-2 bg-dark text-light">
        <p className="p-2 m-0 text-center">
          <strong>{text.split(/\s+/).filter((el)=>{return el.length!==0}).length}</strong> words and <strong>{text.length}</strong> charaters
        </p>
        <p className="p-2 m-0 text-center">
          <strong>{(0.008 * text.split(" ").filter((el)=>{return el.length!==0}).length).toFixed(2)}</strong> Minutes to read this
          text
        </p>
        <h3 className="p-1 mb-0 text-center bg-warning text-dark ">
          Text Preview
        </h3>
        <pre className="p-2 m-0 text-break"><p>{text.length>0? text: 'Write some text in above box to preview it here'}</p></pre>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string,
};
