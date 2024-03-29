import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "Success")
      // document.title = 'DarKMode' //TO cahnge the title dynamically
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success")
    }
  }

  return (
    <>
{/* <Navbar title="TextUtils2" aboutText="ABOUT US" /> */}
{/* <Navbar/> */}

<BrowserRouter>
<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>
    <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
    </Routes>
    {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
</div>
</BrowserRouter>
    </>
  );
}

export default App;
