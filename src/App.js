
import { useActionState, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";




export default App;
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleRed = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#8e1628';
      document.querySelectorAll(".btn").forEach(btn => {
        btn.style.backgroundColor = 'red';
      })
    }
    else {
    

    }
  }
  const toggleBlue = () => {
  if(mode === 'dark') {
    document.body.style.backgroundColor = '#1f6ebc';
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.backgroundColor = 'blue';
    })
  }
  else{

  }
}
  const toggleGreen = () => {
   if(mode === 'dark'){
   document.body.style.backgroundColor = '#16b023';
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.backgroundColor = 'green';
    })
  }

  else{
    
  }
   }
    
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")

    }

  }
  return (
    <>
      <Navbar text="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed} toggleBlue={toggleBlue} toggleGreen={toggleGreen} />
 <Alert alert={alert} mode={mode} />
      <Routes>
        <Route path="/about" element={<About mode = {mode} />}  />
        <Route path="/" element=
            { <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
        } />
       </Routes> 
  
     
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
    </>
  );
}

