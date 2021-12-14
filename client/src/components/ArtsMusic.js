import React, { Component } from 'react';
import bannerPic from '../img/UnionTerminal.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'


const ArtsMusic = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" id="card-art-img" variant="top" src={props.artsmusic.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.artsmusic.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.artsmusic.area}</h3>
              <h4 className="card-address">{props.artsmusic.address}</h4>
              <p className="card-description">{props.artsmusic.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.artsmusic.website}>Website</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class ArtsMusics extends Component{
  constructor(props){
    super(props)
    this.state = {
      artsmusics: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'artsmusic/')
    .then(response => {
      this.setState({
        artsmusic : response.data,
        loading: false
      })
      console.log('artsmusic attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  artsmusicList() {
    return this.state.artsmusic.map((currentArt) => {
      return <ArtsMusic artsmusic = {currentArt} key={currentArt._id} />
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
                <div id='artsList'>
                  {this.artsmusicList()}
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

export default ArtsMusics