import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './component/Body';
import Navbar from './component/Navbar';
import Alerts from './component/Alerts';
import AboutUs from './component/AboutUs';

import './App.css';

function App() {
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const [mode, setMode] = useState('light');
 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
    
    if (text === 'Enable Dark Mode') {
      setText('Disable Dark Mode');
      document.body.style.backgroundColor = '#3b3b3b';
    } else {
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
    
    
    showAlert(`${mode === 'light' ? 'Dark' : 'Light'} mode has been enabled`, 'success');
  };

  return (
    <div className="App" >
      
        <Router>
        <Navbar title="Soumay_Soni" mode={mode} text={text} toggleMode={toggleMode} />
          <Alerts alert={alert} />
            <div className="container my-3">
          <Routes>
            <Route path="/" element={<Body showAlert={showAlert} heading="Enter your text below to analyze :-" mode={mode} />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
          </div>
        </Router>
      </div>
   
  );
}

export default App;
