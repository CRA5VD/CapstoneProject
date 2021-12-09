import React, { Component } from 'react';
import bannerPic from '../img/UnionTerminal.jpg'


class LodgAndTran extends Component{
    render() {
      return (
      <div className="main-contain">
        <div className="banner-contain">
          <div className="banner-banner-sub">
          <img className="banner-bg" src={bannerPic} alt="Logo" />
          </div>
        </div>  

      {/*  Main Container */}

        <div className="container-fluid main-content-contain w-100">
          <div className="row w-100">


            <h6 className="LAndT-main-header" id="LAndT-TopHeader">Hotels</h6>

      {/* ----- Hotels ----- */}

            <div id="hotels" className="main-contain-props">
              <div className="inner-contain-props container-fluid row rounded">

                <div className="servImageLeft col-4">
                  <img className="servImage" src="URL" alt="" />
                </div>

                <div id="headParServ" className="servInfo col-8">
                  <div className="serverInfoSub container-fluid row rounded">
                    <h1 className="servName mt-3">Name</h1>
                   
                    <div className="serverLoc col-4">
                      <h3 className="servArea">--Area--</h3>
                      <p className="servDis">--Address--</p>
                      <a className="servBtnAnc btnServ" href="#"><button className="servBtn btn" type="button" >Website</button></a>
                    </div>  
                    <div className="serverDis col-4">
                      <p className="serverDisP">---Description---</p>
                    </div>
                  </div> 
                </div> 
              </div>
            </div>


      {/* ----- Transportation ----- */}

      <h6 className="LAndT-main-header">Transportation</h6>

            <div id="hampton" className="main-contain-props">
              <div className="inner-contain-props container-fluid row rounded">

                <div id="headParServ" className="servInfo col-8">
                  <div className="serverInfoSub container-fluid row rounded">
                    <h1 className="servName mt-3">Name</h1>
                   
                    <div className="serverLoc col-4">
                      <h3 className="servArea">--Area--</h3>
                      <p className="servDis">--Address--</p>
                      <a className="servBtnAnc btnServ" href="#"><button className="servBtn btn" type="button" >Website</button></a><br/><br/><a className="servBtnAnc btnServ" href="#"><button className="servBtn btn" type="button" >Route Map</button></a>
                    </div>  
                    <div className="serverDis col-4">
                      <p className="serverDisP">---Description---</p>
                    </div>
                  </div> 
                </div>
          
                <div className="servImageRight col-lg-4 col-md-3">
                  <img className="servImage" src="URL" />
                </div>
              </div>
            </div>


      {/* main content container End */}

          </div>
        </div>
      </div>

      )
    }    
}

export default (LodgAndTran)