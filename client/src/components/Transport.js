import React, { Component } from 'react';
import bannerPic from '../img/CincinnatiLandscape.jpg'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'





const TransportZ = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" variant="top" src={props.transportz.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.transportz.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.transportz.area}</h3>
              <h4 className="card-address">{props.transportz.address}</h4>
              <p className="card-description">{props.transportz.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.transportz.website}>Website</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class Transport extends Component{
  constructor(props){
    super(props)
    this.state = {
      transport: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'transportz/')
    .then(response => {
      this.setState({
        transportz: response.data,
        loading: false
      })
      console.log('transportz attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  transportzList() {
    return this.state.transportz.map((currentTran) => {
      return <TransportZ transportz = {currentTran} key={currentTran._id} />
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
                <div className="" id='TranList'>
                  {this.transportzList()}
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

export default Transport
