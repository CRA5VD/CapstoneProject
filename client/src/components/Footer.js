import React from 'react';
import { Link,  withRouter } from 'react-router-dom';
import BWlogo from '../img/BWlogo.png';



const Footer = () => {
  return (
<footer class="page-footer footer-contain">
      <div class="container-fluid footer-main-contain w-100">
        <div class="row footer-main-sub">
          <div className="row footer-social-main">
            <div className="col-3 footer-social-sub center">
              <ul className="footer-social-sub">
              <li><Link className="nav-links footer-social-bott-links bi bi-twitter" to="_"></Link></li>
              <li><Link className="nav-links footer-social-bott-links bi bi-facebook" to="_"></Link></li>
              <li><Link className="nav-links footer-social-bott-links bi bi-instagram" to="_"></Link></li>
              <li><Link className="nav-links footer-social-bott-links bi bi-youtube" to="_"></Link></li>
              </ul>
            </div>
          
              <div class="col-5 footer-logo-contain">
                <a href="/" className="footer-a-logo">
                  <img className="footer-img-logo" src={BWlogo} alt="Logo" />
                </a>
              </div>
              <div class="col-1 footer-links-contain1 left">
                {/* <h5 class="white-text">Links</h5> */}
                <ul className="footer-links-ul">
                  <li><a class="footer-main-links" href="#!">Home</a></li>
                  <li><a class="footer-main-links" href="#!">Contact</a></li>
                  <li><a class="footer-main-links" href="#!">About</a></li>
                </ul>
              </div>
              <div class="col-3 footer-links-contain2">
                <ul className="footer-links-ul">
                  <li><a class="footer-main-links" href="#!">Events</a></li>
                  <li><a class="footer-main-links" href="#!">Food & Drinks</a></li>
                  <li><a class="footer-main-links" href="#!">Entertainment</a></li>
                  <li><a class="footer-main-links" href="#!">Lodging & Transportation</a></li>
                  <li><a class="footer-main-links" href="#!"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>  

          {/* Bottom Footer */}
      <div class="container-fluid footer-bott-contain w-100">
        <div class="row footer-bott-sub">
          <div class="footer-copyright col-12">© 2014 Copyright Cincinnati Destination</div>
        </div>
      </div> 
  </footer>

)
}


export default withRouter(Footer)