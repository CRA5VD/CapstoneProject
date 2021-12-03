import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhereToGo from './components/WhereToGo';
import LodgAndTran from './components/LodgAndTran';



class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />

          <Route exact path='/' component={ Home }/>
          <Route  path='/about' component={ WhereToGo }/>
          <Route  path='/contact' component={ LodgAndTran }/>


        <Footer />
      </BrowserRouter>

    )
  }
}

export default App;
