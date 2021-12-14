import React, { Component } from 'react';
import bannerPic from '../img/cinciparks.jpg'


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

        <div className='container'>
          <div className="row">
            <div className="col-sm">
              <h2>About Us</h2> 
              <br />
              <br />
              
              <p>________</p>
              <p>
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
              <p>_________</p>
              <p>
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
              <p>_________</p>
              <p>
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