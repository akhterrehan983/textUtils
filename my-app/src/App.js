import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Form from './components/Form'
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('Enable dark mode');
  const toggleMode1 = ()=> {
    if (mode === 'Enable dark mode'){
      showAlert("Dark Mode Enabled","warning")
      setMode('Enable light mode');
      console.log(mode);
      document.title = "Dark Mode"
    }
    else{
      showAlert("Light Mode Enabled","success")
      setMode('Enable dark mode');
      console.log(mode);
      document.title = "Light Mode"
    }
  }
  
  const [alert,setAlert] = useState(null)
  const showAlert = (msg,type)=> {
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>
    setAlert(null)
    ,1500)
  }

  return (
  <>

{/* <Navbar title="textUtils" mode={mode} toggleMode={toggleMode1}></Navbar> */}

{/* <Form  showAlert={showAlert} /> */}

<Router>
      <div>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
      
            <Route path="/" element={<><Navbar title="textUtils" mode={mode} toggleMode={toggleMode1} /><Alert alert={alert}/><Form  showAlert={showAlert} /> </>} />
          <Route exact path="/about" element={<><Navbar title="textUtils" mode={mode} toggleMode={toggleMode1} /><About /></>} />  

        
        </Routes>
      </div>
    </Router>
{/* <About></About> */}
  </>
  );
}

export default App;
