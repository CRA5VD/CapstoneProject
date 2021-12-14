import React, { Component } from 'react';
import bannerPic from '../img/fSquare.jpg'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'




const Lodging = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" variant="top" src={props.lodging.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.lodging.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.lodging.area}</h3>
              <h4 className="card-address">{props.lodging.address}</h4>
              <p className="card-description">{props.lodging.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.lodging.website}>Website</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class Lodgings extends Component{
  constructor(props){
    super(props)
    this.state = {
      lodgings: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'lodging/')
    .then(response => {
      this.setState({
        lodging : response.data,
        loading: false
      })
      console.log('lodging attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  lodgingList() {
    return this.state.lodging.map((currentLod) => {
      return <Lodging lodging = {currentLod} key={currentLod._id} />
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
                <div className="" id='lodgingList'>
                  {this.lodgingList()}
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

export default Lodgings