import React from "react";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkFrom from "./components/ImageLinkFrom/ImageLinkFrom";
import Rank from "./components/Rank/Rank";
import Logo from "./components/Logo/Logo";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js";
import SignIn from "./components/SignIn/SignIn.js";
import Register from "./components/Register/Register.js";
import "./App.css";
import "tachyons";
import Particle from "./components/Particles";

// const app = new Clarifai.App({
//   apiKey: "e908dde636da467285c367ce62b6bcf8",
// });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ``,
      imageUrl: ``,
      box: {},
      router: "signin",
      isSignedIn: false,
    };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  // onButtonSubmit = () => {
  //   this.setState({ imageUrl: this.state.input });
  //   app.models
  //     .predict(Clarifai.GENERAL_MODEL, this.state.input)
  //     .then((response) =>
  //       this.displayFaceBox(this.calculateFaceLocation(response))
  //     )
  //     .catch((error) => console.log(error));
  // };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "Home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ router: route });
  };

  render() {
    const { isSignedIn, imageUrl, router, box } = this.state;
    return (
      <div className="App">
        <Particle />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {router === "Home" ? (
          <div>
            <Logo />

            <Rank />
            <ImageLinkFrom
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />

            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : router === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}
export default App;
