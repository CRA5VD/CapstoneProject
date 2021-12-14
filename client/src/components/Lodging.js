import React, { Component } from 'react';
import bannerPic from '../img/fSquare.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'




const Lodging = (props) => {
  return (
  <div className="main-contain-l">
    <div className="events-main-contain-l">
      <Card className="card-main-l">
        <Card.Body className="card-body-l">
          <Card.Title><h2 className="card-name-l">{props.lodging.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area-l">{props.lodging.area}</h3>
              <h4 className="card-address-l">{props.lodging.address}</h4>
              <p className="card-description-l">{props.lodging.description}</p>
          </Card.Text>
          <Button className="card-button-website-l" variant="primary" href={props.lodging.website}>Website</Button>
      </Card.Body>
          <Card.Img className="card-img-l" variant="top" src={props.lodging.imageURL} />
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
          <div>
            <div className="banner-contain">
              <div className="banner-sub">
              <img className="banner-bg" src={bannerPic} alt="Logo" />
            </div>
          </div> 
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div id='lodgingList'>
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