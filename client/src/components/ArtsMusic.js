import React, { Component } from 'react';
import bannerPic from '../img/UnionTerminal.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'


const ArtMusic = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" variant="top" src={props.artmusic.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.artmusic.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.artmusic.area}</h3>
              <h4 className="card-address">{props.artmusic.address}</h4>
              <p className="card-description">{props.artmusic.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.artmusic.website}>Website</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class ArtMusics extends Component{
  constructor(props){
    super(props)
    this.state = {
      artmusics: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'artmusic/')
    .then(response => {
      this.setState({
        artmusic : response.data,
        loading: false
      })
      console.log('artmusic attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  artmusicList() {
    return this.state.artmusic.map((currentArt) => {
      return <ArtMusic artmusic = {currentArt} key={currentArt._id} />
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
                  {this.artmusicList()}
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

export default ArtMusics