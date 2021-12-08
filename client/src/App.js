import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import Entertainment from './components/Entertainment';
import LodgAndTran from './components/LodgAndTran';
import FoodDrinks from './components/FoodDrinks';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';



class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />

          
            <Route exact path='/' component={ Home }/>
            <Route  path='/FoodDrinks' component={ FoodDrinks }/>
            <Route  path='/Events' component={ Events }/>
            <Route  path='/Entertainment' component={ Entertainment }/>
            <Route  path='/LodgAndTran' component={ LodgAndTran }/>
            <Route  path='/About' component={ About }/>
            <Route  path='/Contact' component={ Contact }/> 
          

        <Footer />
      </BrowserRouter>
      

    )
  }
}

export default App;
