import React, { Component } from 'react';
import Cincinnati4kDrone from '../img/Cincinnati4KDrone.mp4';


class Home extends Component{
    render() {
      return (
      <div className="home-container">
        <div className="video-container">
          <div className="video-container-sub">
            <video autoPlay loop muted id="video-bg">
              <source src={Cincinnati4kDrone} type="video/mp4"/>
            </video>
          </div>
        </div>
        <br />
          <div className='post card'>
            {/* <img src={_} alt="Logo" /> */}
            <div className="card-content">
              <a>
                <span className='card-title red-text'>Help</span>
              </a>
              <p>Help</p>
            </div>
          </div>
      </div>
      )
    }    
}

export default (Home)