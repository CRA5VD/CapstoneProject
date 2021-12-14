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
            <Route  path='/artsMusic' component={ ArtsMusic }/>
            <Route  path='/entertainmentsports' component={ EntertainmentSports }/>
            <Route  path='/lodging' component={ Lodging }/>
            <Route  path='/transport' component={ Transport }/>
            <Route  path='/about' component={ About }/>
            <Route  path='/contact' component={ Contact }/> 
          

        <Footer />
      </BrowserRouter>
      

    )
  }
}

export default App;
