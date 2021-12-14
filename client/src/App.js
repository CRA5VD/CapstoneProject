import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import EntertainmentSports from './components/EntertainmentSports';
import Lodging from './components/Lodging';
import Transport from './components/Transport';
import FoodDrinks from './components/FoodDrinks';
import ArtsMusic from './components/ArtsMusic';
import About from './components/About';
import Contact from './components/Contact';



class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />

          
            <Route exact path='/' component={ Home }/>
            <Route  path='/fooddrink' component={ FoodDrinks }/>
            <Route  path='/ArtsMusic' component={ ArtsMusic }/>
            <Route  path='/entertainmentsports' component={ EntertainmentSports }/>
            <Route  path='/Lodging' component={ Lodging }/>
            <Route  path='/Transport' component={ Transport }/>
            <Route  path='/About' component={ About }/>
            <Route  path='/Contact' component={ Contact }/> 
          

        <Footer />
      </BrowserRouter>
      

    )
  }
}

export default App;
