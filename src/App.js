import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkFrom from "./components/ImageLinkFrom/ImageLinkFrom";
import Rank from "./components/Rank/Rank";
import Logo from "./components/Logo/Logo";
import "./App.css";
import "tachyons";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkFrom />
      {/* 
      
     
      <FaceRecognition/>
      */}
    </div>
  );
}

export default App;
