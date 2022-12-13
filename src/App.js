import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState("dark"); //wheter dark mode is enabled or not
  return (
    <>
      <Navbar title="Text Utils" mode={mode}/>
      {/* <Navbar/> */}
      <div className="container my-2">
        <TextForm heading="Enter the text to analyze"/>
      </div>
      <div className="container my-3">
        <About />
      </div>
    </>
  );
}
export default App;
