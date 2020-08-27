import React from 'react'
import Header from './component/Header'
import Navigation from './component/Navigation'
import Slider from './component/Slider'
import BestProduct from './component/BestProduct'
import Footer from './component/Footer'
import './App.css'


function App() {

  return (
    <div className="App">
      <Header/>
      <Navigation pageMove="홈" className="zIndex_2"/>
      <Slider/>
      <BestProduct categori="브랜드"/>
      <Footer/>
    </div>
  );
}

export default App;


//12.18.3