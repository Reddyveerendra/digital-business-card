import React from "react";
import './App.css';
import Info from "./Components/info.js";
import About from "./Components/About.js"
import Interest from "./Components/Interests";
function App() {
  return (
    <div className="App">
      <img src="https://raw.githubusercontent.com/Reddyveerendra/digital-business-card/main/src/images/profile_pic.jpg" alt="profile_pic" />
      <Info />
      <About />
      <Interest />
    </div>
  )
}

export default App;
