import React, { Component } from 'react';
import bannerPic from '../img/UnionTerminal.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'


const ArtMusicZ = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" variant="top" src={props.artmusicz.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.artmusicz.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.artmusicz.area}</h3>
              <h4 className="card-address">{props.artmusicz.address}</h4>
              <p className="card-description">{props.artmusicz.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.artmusicz.website}>Website</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class ArtMusic extends Component{
  constructor(props){
    super(props)
    this.state = {
      artmusic: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'artmusicz/')
    .then(response => {
      this.setState({
        artmusicz : response.data,
        loading: false
      })
      console.log('artmusicz attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  artmusiczList() {
    return this.state.artmusicz.map((currentArt) => {
      return <ArtMusicZ artmusicz = {currentArt} key={currentArt._id} />
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
                <div className="" id='artList'>
                  {this.artmusiczList()}
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

export default ArtMusic