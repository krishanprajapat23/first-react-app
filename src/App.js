import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not

  const toggleMode = () => {
    // (mode === 'light') ? setmode('dark') : setmode('light');
    if(mode === 'light') {
      setmode('dark');
      document.body.style.background = '#0d1117'
    } else {
      setmode('light');
      document.body.style.background = '#fff'
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="container my-2">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>
      <div className="container my-3">
        <About />
      </div>
    </>
  );
}
export default App;
