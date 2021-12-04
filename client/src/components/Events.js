import React, { Component } from 'react';
import bannerPic from '../img/CincinnatiLandscape.jpg'


class Events extends Component{
    render() {
      return (
      <div className="main-contain">
        <div className="banner-container">
          <div className="banner-container-sub">
            <img className="banner-bg" src={bannerPic} alt="Logo" />
          </div>
        </div>
          <div className='post card'>
            <div className="card-content">
              <h2>Events</h2>
              <p>Insert</p>
            </div>
          </div>
      </div>
      )
    }    
}

export default (Events)