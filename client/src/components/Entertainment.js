import React, { Component } from 'react';
import bannerPic from '../img/FCstadiumW.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Entertainment extends Component{
    render() {
      return (
      <div className="main-contain">
        <div className="banner-contain">
          <div className="banner-sub">
          <img className="banner-bg" src={bannerPic} alt="Logo" />
          </div>
        </div>
        <div className="events-main-contain container-fluid justify-content-center d-flex mt-5 w-100">
          <Card style={{ width: '35rem', height: '40rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title><h2>Card Title</h2></Card.Title>
                <Card.Text>
                  <h3>Area</h3>
                  <h4>Address</h4>
                  <p>Description</p>
              </Card.Text>
              <Button variant="primary">Website</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      )
    }    
}

export default (Entertainment)