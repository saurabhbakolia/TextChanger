import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "texUtils"/>
    <div className="container my-3">
      <TextForm heading = "Enter text to analyze.."/>
    </div>
    </>
  );
}

export default App;
