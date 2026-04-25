
import { useActionState, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { Routes, Route } from "react-router-dom";
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
    setMode('dark');
    document.body.style.backgroundColor = '#1f6ebc';
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.backgroundColor = 'blue';
    })
  }
  const toggleGreen = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#16b023';
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.backgroundColor = 'green';
    })
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
      <Navbar text="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed} toggleBlue={toggleBlue} toggleGreen={toggleGreen} />

      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/textform" element=
            { <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        } />
       </Routes> 
  
      <Alert alert={alert} mode={mode} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />


    </>

  );
}

