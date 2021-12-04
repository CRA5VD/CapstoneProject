import React, { Component } from 'react';
import bannerPic from '../img/CincinnatiLandscape.jpg'


class FoodAnDrinks extends Component{
    render() {
      return (
      <div className="main-contain">
        <div className="banner-contain">
          <div className="banner-sub">
          <img className="banner-bg" src={bannerPic} alt="Logo" />
          </div>
        </div>
          <div className='post card'>
            <div className="card-content">
              <h2>Food & Drinks</h2>
              <p>Insert</p>
            </div>
          </div>
      </div>
      )
    }    
}

export default (FoodAnDrinks)