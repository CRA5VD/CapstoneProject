import React, { Component } from 'react';
import bannerPic from '../img/cinciparks.jpg';
import aboutPic from '../img/about.png';
import missionPic from '../img/teamBuilding.png';
import teamPic from '../img/team.jpg';



class About extends Component {
  render() {
    return (
      <div className="main-contain">
        <div className="banner-container">
          <div className="banner-about-sub">
            <img className="banner-bg w-100" src={bannerPic} alt="Logo" />
          </div>
        </div>

      {/* About */}

        <div className="container-fluid">
          <div  id='about-sub' className="row justify-content-evenly w-100">
            <div className="col-sm">
            
              <h2>About<br />Us</h2> 
              <img className="about-main-pics" src={aboutPic} alt="..." />
              
             
              <p className="about-main-buttn center">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Click Me
                </a>

              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">


                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
            <div className="col-sm">
              <h2>Mission Statement</h2>
              
              <img className="about-main-pics" src={missionPic} alt="..." />
              
             
              <p className="about-main-buttn center">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Click Me
                </a>

              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
            <div className="col-sm">
              <h2>Meet the Team</h2>
              <img className="about-main-pics" src={teamPic} alt="..." />
              
             
              <p className="about-main-buttn center">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Click Me
                </a>

              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    )
  }
}

export default (About)