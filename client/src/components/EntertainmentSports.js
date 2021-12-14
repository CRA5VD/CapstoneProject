import React, { Component } from 'react';
import bannerPic from '../img/JungleJims.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'

const EntertainmentSport = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" variant="top" src={props.entertainmentsports.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.entertainmentsports.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.entertainmentsports.area}</h3>
              <h4 className="card-address">{props.entertainmentsports.address}</h4>
              <p className="card-description">{props.entertainmentsports.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.entertainmentsports.website}>Website</Button>
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
        return this.state.entertainmentsports.map((currentSport) => {
          return <EntertainmentSport entertainmentsports = {currentSport} key={currentSport._id} />
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
                    <div id='sportsList'>
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
