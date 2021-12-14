import React, { Component } from 'react';
import bannerPic from '../img/JungleJims.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'

const EntertainmentSports = (props) => {
      return (
        this.state.loading === false ? (
          <div className="">
            <div className="banner-contain">
              <div className="banner-sub">
              <img className="banner-bg" src={bannerPic} alt="Logo" />
            </div>
          </div> 
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="" id='foodList'>
                  {this.entertainmentsportsList()}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <h1>Loading...</h1>
          
          </div>
        )
    
      )
    }    
    class EntertainmentSports extends Component{
      constructor(props){
        super(props)
        this.state = {
          entertainmentsports: [],
          loading: true
        }
      }
      componentDidMount(){
        axios.get(BACKEND_URL + 'entertainmentsports/')
        .then(response => {
          this.setState({
            entertainmentsports : response.data,
            loading: false
          })
          console.log('entertainmentsports')
        })
        .catch((error) => {
          console.log(error)
        });
      }
      entertainmentsportsList() {
        return this.state.entertainmentsports.map((currentFood) => {
          return <EntertainmentSports entertainmentsports = {currentFood} key={currentFood._id} />
        })
      }
        render() {
          return (
            this.state.loading === false ? (
              <div className="">
                <div className="banner-contain">
                  <div className="banner-sub">
                  <img className="banner-bg" src={bannerPic} alt="Logo" />
                </div>
              </div> 
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-6">
                      {this.entertainmentsportsList()}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <h1>Loading...</h1>
              
              </div>
            )
        
          )
        }    
    }
    

export default EntertainmentSports
