import React, { Component } from 'react';
import Cincinnati4kDrone from '../img/Cincinnati4KDrone.mp4';
import { ReactPhotoCollage } from 'react-photo-collage';




const setting = {
  width: '650px',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: '../img/BrandVendor/Z14MacysDowntownDazzle.jpg' },
    { source: '../img/BrandVendor/Z13ElvesOnElder.jpg' },
    { source: '../img/BrandVendor/Z15ChristmasNightOfLights.jpg' },
    { source: '../img/BrandVendor/Z16HolidayTrains.jpeg' },
    { source: '../img/BrandVendor/Z17CincinnatiGolidayProps.jpg' },
    { source: '../img/BrandVendor/Z18AChristmasCarol.jpg' },
  ],
  showNumOfRemainingPhotos: true
};


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
        
        <div className="container-fluid home-photo-collage">
          <div className="home-sub-collage">
            <ReactPhotoCollage {...setting} />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="home-travel-wid col-5">
                <iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=4&tp1=0000000&tp2=0000000&lob=H,FH,F&des=cincinnati, oh&wbi=2&olc=000000&whf=4&hfc=C7C7C7&wif=4&ifc=000000&wbc=FFCB00&wbf=4&bfc=3D3100&wws=1&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
              </div>
              <div className="home-weather-wid col-5">
                <a class="weatherwidget-io" id="widgetWeather" href="https://forecast7.com/en/39d10n84d51/cincinnati/" data-label_1="CINCINNATI" data-label_2="WEATHER" data-theme="original" >CINCINNATI WEATHER</a>
              </div>
            </div>  
          </div>
        </div>
      </div>

      )
    }    
}

export default (Home)



