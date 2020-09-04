import React from 'react'
import Header from './component/Header'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import Home from './component/home/Home'
import middle from './component/middle/middle'
import Product_detail from './component/middle/Product_detail'
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import './App.css'


class App extends  React.Component{

  render(){
    return (
      <div className="App">

        <Router>
          <Header/>
          <Navigation pageMove="홈" className="zIndex_2"/>
          
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/product" component={Product_detail}></Route>
            <Route path="/:classification/:categori/:detail" component={middle}></Route>
          </Switch>
          
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;