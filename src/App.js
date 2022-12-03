import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
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
