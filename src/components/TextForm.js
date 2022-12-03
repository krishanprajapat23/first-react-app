import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  //function to make uppercase text
  const handleUC = () => {
    // console.log("toUpperCase fn" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  //function to make lowercase text
  const handleLC = () => {
    // console.log("toUpperCase fn" + text)
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    // console.log("handleOnChange")
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  //text = 'new text'; //wrong way to change state
  // setText('new text'); //right way to change state and settext is a function

  return (
    <>
      <div className="textform container">
        <h1 className="heading-form">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="Textarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-danger" onClick={handleUC}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLC}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-2 bg-dark text-light">
        <p className="p-2 m-0 text-center">
          <strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> charaters
        </p>
        <p className="p-2 m-0 text-center">
          <strong>{(0.008 * text.split(" ").length).toFixed(2)}</strong> Minutes to read this
          text
        </p>
        <h3 className="p-1 mb-0 text-center bg-warning text-dark ">
          Text Preview
        </h3>
        <p className="p-2 m-0">{text}</p>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string,
};
