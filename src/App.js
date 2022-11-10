import React from 'react';
import { ReactDOM } from 'react-dom/client';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import 'tachyons';
function App() {
  return (
    <div className="App">
     <Navigation/>
     <Logo/>
   
     {/* 
      
      <ImageLinkFrom/>
      <FaceRecognition/>
      */}
    </div>
  );
}

export default App;
