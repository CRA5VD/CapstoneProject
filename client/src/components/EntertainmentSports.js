import React, { Component } from 'react';
import bannerPic from '../img/BLINKRoeblingBridge.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'

const EntertainmentSports = (props) => {
      return (
      <div className="main-contain">
        <div className="banner-contain">
          <div className="banner-sub">
          <img className="banner-bg" src={bannerPic} alt="Logo" />
          </div>
        </div>
        <div className="events-main-contain container-fluid justify-content-center d-flex mt-5 w-100">
          <Card style={{ width: '35rem', height: '40rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title><h2>Card Title</h2></Card.Title>
                <Card.Text>
                  <h3>Area</h3>
                  <h4>Address</h4>
                  <p>Description</p>
              </Card.Text>
              <Button variant="primary">Website</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
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