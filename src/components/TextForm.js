import React, {useState} from "react";
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const handleUC = ()=>{
        // console.log("toUpperCase fn" + text)
        let newText = text.toUpperCase();
        setText(newText)
    };
    const handleOnChange = (e)=>{
        // console.log("handleOnChange")
        setText(e.target.value)
    };

    const [text, setText] = useState('Enter text here');
    //text = 'new text'; //wrong way to change state
    // setText('new text'); //right way to change state and settext is a function

  return (
    <div className="textform">
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
      <button className="btn btn-danger" onClick={handleUC}>Convert to Uppercase</button>
    </div>
  );
}


TextForm.prototype ={
    heading: PropTypes.string
}