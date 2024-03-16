import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'
import Alert from './components/Alert.js';
function App() {

  const toggleMode = () => {

    if (mode.backgroundColor === 'white') {
      toggledMode({
        backgroundColor: "black",
        color: "white"
      })
      if (btnMode.backgroundColor === "black") {
        btntoggledMode({
          backgroundColor: "white",
          color: "black"
        })
      } else {
        btntoggledMode({
          backgroundColor: "black",
          color: "white"
        })
      }
      light("Light Mode")
      showAlert("Switched to dark mode", "success")
    } else {
      toggledMode({
        backgroundColor: "white",
        color: "black"
      })
      if (btnMode.backgroundColor === "black") {
        btntoggledMode({
          backgroundColor: "white",
          color: "black"
        })
      } else {
        btntoggledMode({
          backgroundColor: "black",
          color: "white"
        })
      }
      light("Dark Mode")
      showAlert("Switched to light mode", "success")
    }
  }
  const [mode, toggledMode] = useState({
    backgroundColor: "white",
    color: "black"
  });
  // theme
  const [dark, light] = useState("Dark Mode");
  // button theme
  const [btnMode, btntoggledMode] = useState({
    backgroundColor: "black",
    color: "white"
  });
  // alert  
  const showAlert = (message, type) => {
    setAlertText({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlertText(null)
    }, 4000);
  }
  const [alertText, setAlertText] = useState(null)

  return (
    <>
      <div className="container-fluid vh-100" style={mode}>
        <Navbar toggleMode={toggleMode} mode={mode} btnMode={btnMode} darkText={dark} />
        <Alert alertText = {alertText}/>
        <Main btnMode={btnMode} mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
