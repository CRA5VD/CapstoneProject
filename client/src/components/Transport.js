import React, { Component } from 'react';
import bannerPic from '../img/CincinnatiLandscape.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'





const Transport = (props) => {
  return (
  <div className="main-contain-t">
    <div className="events-main-contain">
      <Card className="card-main-t">
        <Card.Img className="card-img-t" variant="top" src={props.transport.imageURL} />
        <Card.Body className="card-body-t">
          <Card.Title><h2 className="card-name-t">{props.transport.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area-t">{props.transport.area}</h3>
              <h4 className="card-address-t">{props.transport.address}</h4>
              <p className="card-phone-t">{props.transport.phone}</p>
          </Card.Text>
          <Button className="card-button-website-t right" variant="primary" target="_blank" rel="noreferrer noopener" href={props.transport.website}>Website</Button>
          <Button className="card-button-map-t right" variant="primary" target="_blank" rel="noreferrer noopener" href={props.transport.map}>Routes</Button>
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
          <div>
            <div className="banner-contain">
              <div className="banner-sub">
              <img className="banner-bg" src={bannerPic} alt="Logo" />
            </div>
          </div> 
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div id='tranList'>
                  {this.transportList()}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading-page container-fluid">
            <div className="loading-page-sub row w-100">
              <h1 className='loading-text'>Loading...</h1>
            </div>
          </div>
        )
    
      )
    }    
}

export default Transports
