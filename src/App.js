import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {Alert} from './components/Alert';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //state for alert message


  const toggleMode = () => {
    // (mode === 'light') ? setmode('dark') : setmode('light');
    if(mode === 'light') {
      setmode('dark');
      document.body.style.background = '#0d1117';
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode('light');
      document.body.style.background = '#fff';
      showAlert("Light Mode Enabled", "success");
    }
  };

  //alert msg
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      msgType: type //color of alert box
    })
    setTimeout(() =>{
      setAlert(null)
    }, 1500)
  };


  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-2">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
      <div className="container my-3">
        <About />
      </div>
    </>
  );
}
export default App;
