import React from 'react';
import Header from './component/Header';
import Navigation from './component/Navigation';
import Slider from './component/Slider'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Slider/>
    </div>
  );
}

export default App;
