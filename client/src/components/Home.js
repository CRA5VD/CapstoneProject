import React, { Component } from 'react';
import Cincinnati4kDrone from '../img/Cincinnati4KDrone.mp4'
import HomeMapCinci from '../img/AllNeighborhoodsCincinati.png'
import Collage from './Collage';


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
        
        {/* Photo Collage */}

            <Collage/>

        {/* Widgets */}

        <div className="container-fluid">
          <div className="row">
              <div className="home-travel-wid col-6 d-flex justify-content-center text-center">
                <iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=4&tp1=0000000&tp2=0000000&lob=H,FH,F&des=cincinnati, oh&wbi=2&olc=000000&whf=4&hfc=C7C7C7&wif=4&ifc=000000&wbc=FFCB00&wbf=4&bfc=3D3100&wws=1&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameBorder="0"></iframe>
              </div>
              <div className="col-6 d-flex justify-content-center text-center"><a className="weatherwidget-io" id="widgetWeather" href="https://forecast7.com/en/39d10n84d51/cincinnati/?unit=us" data-label_1="CINCINNATI" data-label_2="WEATHER" data-theme="original" >CINCINNATI WEATHER</a></div>
              {/* Map */}
              <div className="home-map-contain col-12 d-flex justify-content-center text-center">
                <img className="home-map-cinci" src={HomeMapCinci} alt="Map of Cincinnati" />
              </div>

          </div>
        </div>
      </div>

      )
    }    
}

export default (Home)



