import React, { Component } from 'react';
import bannerPic from '../img/JungleJims.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'
const FoodDrink = (props) => {
  return (
    <div className="bg-primary" style={{backgroundColor: 'red'}}>
      <img src={props.fooddrinks.imageURL} alt="" />
    </div>
  )
  
}
 

class FoodDrinks extends Component{
  constructor(props){
    super(props)
    this.state = {
      fooddrink: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'fooddrink/')
    .then(response => {
      this.setState({
        fooddrink : response.data,
        loading: false
      })
      console.log('fooddrink attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  fooddrinkList() {
    return this.state.fooddrink.map((currentFood) => {
      return <FoodDrink fooddrink = {currentFood} key={currentFood._id} />
    })
  }
    render() {
      return (
        this.state.loading === false ? (
          <div className="">
            {this.fooddrinkList()}
          </div>
        ) : (
          <div className="">
            <h1>Loading...</h1>
          </div>
        )
      // <div className="main-contain">
      //   <div className="banner-contain">
      //     <div className="banner-sub">
      //     <img className="banner-bg" src={bannerPic} alt="Logo" />
      //     </div>
      //   </div>  
      //   <div className="events-main-contain container-fluid justify-content-center d-flex mt-5 w-100">
      //     <Card style={{ width: '35rem', height: '40rem' }}>
      //       <Card.Img variant="top" src="holder.js/100px180" />
      //       <Card.Body>
      //         <Card.Title><h2>Card Title</h2></Card.Title>
      //           <Card.Text>
      //             <h3>Area</h3>
      //             <h4>Address</h4>
      //             <p>Description</p>
      //         </Card.Text>
      //         <Button variant="primary">Website</Button>
      //       </Card.Body>
      //     </Card>
      //   </div>
      // </div>
      )
    }    
}

export default FoodDrinks