// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setStyle] = useState({
  //   backgroundColor: "#fff",
  //   color: "#333",
  // });

  // const [btnText, setBtnText] = useState("Dark Mode");

  //toggle dark mode
  // const toggleBtn = () => {
  //   if (myStyle.color === "#fff") {
  //     setStyle({
  //       color: "#333",
  //       backgroundColor: "#fff",
  //       border: "1px solid #333",
  //     });
  //     setBtnText("Dark Mode");
  //   } else {
  //     setStyle({
  //       backgroundColor: "#333",
  //       color: "#fff",
  //       border: "1px solid #fff",
  //     });
  //     setBtnText("Light Mode");
  //   }
  // };


  //dark mode for about page
  let myStyle = {
    color: props.mode === 'dark' ? '#fff' : 'rgb(38 49 66)',
    backgroundColor: props.mode === 'dark' ? 'rgb(38 49 66)' : '#fff'
  }



  return (
    <>
      <div className="about-content" style={myStyle}>
        <div className="about-header p-2 d-flex justify-content-between my-2">
          <h2 className="text-center">About us</h2>
          {/* <button onClick={toggleBtn} type="button" className="btn btn-warning">
            {btnText}
          </button> */}
        </div>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your text </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use </strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible </strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
