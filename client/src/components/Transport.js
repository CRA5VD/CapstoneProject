import React, { Component } from 'react';
import bannerPic from '../img/CincinnatiLandscape.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'





const Transport = (props) => {
  return (
    <div className="main-contain-lt">
   
    <div className="events-main-contain">
      <Card className="card-main-lt">
        <Card.Img className="card-img-lt" variant="top" src={props.transport.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name-lt">{props.transport.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area-lt">{props.transport.area}</h3>
              <h4 className="card-address-lt">{props.transport.address}</h4>
              <p className="card-phone-lt">{props.transport.phone}</p>
          </Card.Text>
          <Button className="card-button-website-lt" variant="primary" href={props.transport.website}>Website</Button>
          <Button className="card-button-map-lt" variant="primary" href={props.transport.map}>Routes</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class Transports extends Component{
  constructor(props){
    super(props)
    this.state = {
      transports: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'transport/')
    .then(response => {
      this.setState({
        transport: response.data,
        loading: false
      })
      console.log('transport attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  transportList() {
    return this.state.transport.map((currentTran) => {
      return <Transport transport = {currentTran} key={currentTran._id} />
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
                <div className="" id='tranList'>
                  {this.transportList()}
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

export default Transports
