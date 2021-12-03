import React from 'react';
import { Link,  withRouter } from 'react-router-dom';
import BWlogo from '../img/BWlogo.png';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Home from './Home';

const Navbar = () => {
  return (
<header>  
  <nav className="nav-wrapper nav-top-contain">
    <div className="container nav-top-sub">
      <div className="nav-contact-contain">
        <ul className="nav-contact-sub">
          <li><Link className="nav-links nav-contact-links bi bi-envelope" to="_"> 1-800-555-1234</Link></li>
          <li><Link className="nav-links bi bi-phone nav-contact-links" to="_"> info@CincinnatiDestination.com</Link></li>
        </ul>
      </div>
      <div className="nav-social-contain">
        <ul className="nav-social-sub">
          <li><Link className="nav-links nav-social-links bi bi-twitter" to="_"></Link></li>
          <li><Link className="nav-links nav-social-links bi bi-facebook" to="_"></Link></li>
          <li><Link className="nav-links nav-social-links bi bi-instagram" to="_"></Link></li>
          <li><Link className="nav-links nav-social-links bi bi-youtube" to="_"></Link></li>
        </ul>
      </div>
    </div>
  </nav>
  <nav className="nav-wrapper  nav-main-contain">
    <div className="container nav-main-sub">
      <div className="nav-main-logo">
      <a href="/" className="brand-logo">
        <img className="main-logo" src={BWlogo} alt="Logo" />
      </a>
      </div>
      <div className="nav-links-main">
        <ul className="nav-links-sub">
          <li><Link className="nav-links nav-main-links" to="/">Home</Link></li>
          <li><DropdownButton id="dropdown" title="Where To Go">
          <Dropdown.Item className="nav-drop-sub" href="#/action-1">Events</Dropdown.Item>
          <Dropdown.Item className="nav-drop-sub" href="#/action-2">Food &Drinks</Dropdown.Item>
          <Dropdown.Item className="nav-drop-sub" href="#/action-3">Entertainment & Sports</Dropdown.Item>
          </DropdownButton></li>
          {/* <li><Link className="nav-links nav-main-links" to="/WhereToGo">Where To Go</Link></li> */}
          <li><Link className="nav-links nav-main-links" to="/LodgAndTran">Lodging & Transportation</Link></li>
        </ul>
      </div>
      </div>
    </nav>
</header>

  )
}


export default withRouter(Navbar)