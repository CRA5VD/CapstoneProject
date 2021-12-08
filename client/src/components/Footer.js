import React from 'react';
import { Link,  withRouter } from 'react-router-dom';
import BWlogo from '../img/BWlogo.png';



const Footer = () => {
  return (
<footer className="page-footer footer-contain">
      <div className="container-fluid footer-main-contain w-100">
        <div className="footer-main-sub">
          <div className="row footer-social-main">
            <div className="col-3 footer-social-sub  d-flex justify-content-center text-center">
              <ul className="footer-social-sub">
              <li><a className="nav-links footer-social-bott-links bi bi-twitter"></a></li>
              <li><a className="nav-links footer-social-bott-links bi bi-facebook"></a></li>
              <li><a className="nav-links footer-social-bott-links bi bi-instagram"></a></li>
              <li><a className="nav-links footer-social-bott-links bi bi-youtube"></a></li>
              </ul>
            </div>
          
              <div className="col-5 footer-logo-contain d-flex justify-content-center text-center">
                <Link to="/" className="footer-a-logo">
                  <img className="footer-img-logo" src={BWlogo} alt="Logo" />
                </Link>
              </div>
              <div className="col-1 footer-links-contain1 left">
                <ul className="footer-links-ul">
                  <li><Link className="footer-main-links" to="/">Home</Link></li>
                  <li><Link className="footer-main-links" to="/Contact">Contact</Link></li>
                  <li><Link className="footer-main-links" to="/About">About</Link></li>
                </ul>
              </div>
              <div className="col-3 footer-links-contain2">
                <ul className="footer-links-ul">
                  <li><Link className="footer-main-links" to="/Events">Events</Link></li>
                  <li><Link className="footer-main-links" to="/FoodDrinks">Food & Drinks</Link></li>
                  <li><Link className="footer-main-links" to="/Entertainment">Entertainment</Link></li>
                  <li><Link className="footer-main-links" to="/LodgAndTran">Lodging & Transportation</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>  

          {/* Bottom Footer */}
        <div className="container-fluid footer-bott-contain">
          <p className="footer-bott-sub">2021 Copyright© Cincinnati Destination</p>
        </div> 
  </footer>

)
}


export default withRouter(Footer)