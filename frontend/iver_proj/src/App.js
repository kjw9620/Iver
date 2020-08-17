import React from 'react';
import Header from './component/Header';
import Navigation from './component/Navigation';
import Slider from './component/Slider'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation pageMove="홈" className="zIndex_2"/>
      <Slider className="zIndex_1"/>
    </div>
  );
}

export default App;
