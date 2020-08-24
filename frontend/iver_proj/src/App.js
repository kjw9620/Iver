import React from 'react';
import Header from './component/Header';
import Navigation from './component/Navigation';
import Slider from './component/Slider'
import BestProduct from './component/BestProduct'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation pageMove="홈" className="zIndex_2"/>
      <Slider/>
      <BestProduct categori="브랜드"/>
    </div>
  );
}

export default App;
