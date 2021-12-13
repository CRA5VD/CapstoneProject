import React, { Component } from 'react';
import bannerPic from '../img/fSquare.jpg'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'




const LodgingZ = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" variant="top" src={props.lodgingz.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.lodgingz.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.lodgingz.area}</h3>
              <h4 className="card-address">{props.lodgingz.address}</h4>
              <p className="card-description">{props.lodgingz.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.lodgingz.website}>Website</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class Lodging extends Component{
  constructor(props){
    super(props)
    this.state = {
      lodging: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'lodgingz/')
    .then(response => {
      this.setState({
        lodgingz : response.data,
        loading: false
      })
      console.log('lodgingz attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  lodgingzList() {
    return this.state.lodgingz.map((currentLod) => {
      return <Lodgingz lodgingz = {currentLod} key={currentLod._id} />
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
                  {this.lodgingzList()}
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

export default Lodging