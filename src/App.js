import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const toggleMode = (event) =>{
    let name  = event.target.name;
    if(name ==="primary"){
      document.body.style.backgroundColor='#99e1ef';
      setMode("primary");
      setTextBoxColor({backgroundColor:"#c7c7e5",color:"black"});
      showAlert("Primary mode is activated","success");
    }else if(name ==="secondary"){
      document.body.style.backgroundColor='grey';
      setMode("secondary");
      setTextBoxColor({backgroundColor:"grey",color:"white"});
      showAlert("Secondary mode is activated","success");
    }else if(name ==="success"){
      document.body.style.backgroundColor='#6bd9b8';
      setMode("success");
      setTextBoxColor({backgroundColor:"#4bdb4b",color:"black"});
      showAlert("Sucess mode is activated","success");
    }else if(name ==="light"){
      document.body.style.backgroundColor='white';
      setMode("light");
      setTextBoxColor({backgroundColor:"white",color:"black"});
      showAlert("Light mode is activated","success");
    }else if(name==="dark"){
      document.body.style.backgroundColor='#83878b';
      setMode("dark");
      setTextBoxColor({backgroundColor:"#575c60",color:"white"});
      showAlert("Dark mode is activated","success");
    }
  }

  const showAlert = (message,type) => {
      setAlert({msg:message,type:type});
      setTimeout(() => {
        setAlert(null)
      }, 15000);
  }

  const [mode, setMode] = useState("light");
  const [textBoxColorInfo, setTextBoxColor] = useState(null);
  const[alert,setAlert] = useState(null);

  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode ={toggleMode}/>
     <Alert alert={alert}/> 
      <Routes>  
        <Route exact path="/" element={ 
          <TextForm  mode={mode}  textBoxColorInfo={textBoxColorInfo}/>
        }/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
