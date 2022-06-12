import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, {useState} from 'react';

function App() {

  const [mode, setMode]  = useState('light'); // set mode using this state
  const [alert, setAlert] = useState(null); // state to show alert 

  // function to show Alert
  const showAlert = (type,message)=>{
      setAlert({ 
          type:type,
          msg: message
      })
  }

  // function to change the mode
  const toggleMode = () =>{
    if(mode==='light') {
      setMode('dark');
     document.body.style.backgroundColor = "#334257";
     showAlert("success", "Dark mode enabled successfully!");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "#EEEEEE";
      showAlert("success", "Light mode enabled successfully!");
    }
  }

  return (
    <>
    <Navbar title = "texUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading = "Enter text to analyze.." mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
