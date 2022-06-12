import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {

  const [mode, setMode]  = useState('light'); // set mode using this state

  // function to change the mode
  const toggleMode = () =>{
    if(mode==='light') {
      setMode('dark');
     document.body.style.backgroundColor = "#334257";
    }else{
      setMode('light');
      document.body.style.backgroundColor = "#EEEEEE";
    }
  }

  return (
    <>
    <Navbar title = "texUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading = "Enter text to analyze.." mode={mode}/>
    </div>
    </>
  );
}

export default App;
