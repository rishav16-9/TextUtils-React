import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
  // BrowserRouter as Router,
  // Switch,
  // Routes,
  // Route,
  //Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether tells dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
   
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils Dark mode enables' //changes the title
      // setInterval(() => {                            // It displays the title frequently
      //   document.title = 'TextUtil is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtil now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils Light mode enables'  Changes the title
    }
  }

  return(
    <>
      {/* for navbar props */}
      {/* <Navbar title = "TextUtil" aboutText = "About TextUtil"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title = "TextUtil" mode={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
          {/* for TextForm props */}
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading = "Enter The Text To Analyze Below" mode={mode}/>
          
              {/* For version 6 *
           <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter The Text To Analyze Below" mode={mode}/>}/>
              <Route exact path="/about" element={<About />}/>
            </Routes> 

            Exact match
                /users --> component 1
                /users/home --> component 2
                React uses partial matching so we use exact path
                For version 5

              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <TextForm showAlert={showAlert} heading = "Enter The Text To Analyze Below" mode={mode}/>
                </Route>
              </Switch>       */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
