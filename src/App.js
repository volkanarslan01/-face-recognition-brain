import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkFrom from "./components/ImageLinkFrom/ImageLinkFrom";
import Rank from "./components/Rank/Rank";
import Logo from "./components/Logo/Logo";
import "./App.css";
import "tachyons";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  onButtonSubmit = () => {
    console.log("Click");
  };
  onInputChange = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkFrom
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* 
      
     
      <FaceRecognition/>
      */}
      </div>
    );
  }
}
export default App;
