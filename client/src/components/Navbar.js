import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BWlogo from '../img/BWlogo.png';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const Navbar = () => {
  return (
    <header>
      {/*   Top Navbar   */}
      <nav className="nav-wrapper nav-top-contain w-100">
        <div className="container-fluid nav-top-sub w-100">
          <div className="nav-contact-contain w-100">
            <ul className="nav-contact-sub w-100">
              <li><p className="nav-links nav-contact-links bi bi-envelope"> 1-800-555-1234</p></li>
              <li><a className="nav-links bi bi-phone nav-contact-links" href="mailto:info@CincinnatiDestination.com"> info@CincinnatiDestination.com</a></li>
            </ul>
          </div>
          <div className="nav-social-contain">
            <ul className="nav-social-sub">
              <li><a className="nav-links nav-social-links bi bi-twitter"></a></li>
              <li><a className="nav-links nav-social-links bi bi-facebook"></a></li>
              <li><a className="nav-links nav-social-links bi bi-instagram"></a></li>
              <li><a className="nav-links nav-social-links bi bi-youtube"></a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}

      <nav className="nav-wrapper  nav-main-contain">
        <div className="container-fluid nav-main-sub">
          <div className="nav-main-logo">
            <Link to="/" className="brand-logo">
              <img className="main-logo" src={BWlogo} alt="Logo" />
            </Link>
          </div>
          <div className="nav-links-main">
            <ul className="nav-links-sub">
              <li><Link className="nav-links nav-main-links" to="/">Home</Link></li>
              <li><DropdownButton id="dropdown" title="Where To Go">
                <Dropdown.Item className="nav-drop-sub"><Link to='/fooddrink'>Food & Drinks</Link></Dropdown.Item>
                <Dropdown.Item className="nav-drop-sub"><Link to='/entertainmentsports'>Entertainment & Sports</Link></Dropdown.Item>
                <Dropdown.Item className="nav-drop-sub"><Link to='/artsmusic'>Arts & Music</Link></Dropdown.Item>
              </DropdownButton></li>
              <li><DropdownButton id="dropdown2" title="Plan Your Trip">
                <Dropdown.Item className="nav-drop-sub"><Link to='/lodging'>Lodging</Link></Dropdown.Item>
                <Dropdown.Item className="nav-drop-sub"><Link to='/transport'>Transportation</Link></Dropdown.Item>
              </DropdownButton></li>
              <li><Link className="nav-links nav-main-links" to="/contact">Contact</Link></li>
              <li><Link className="nav-links nav-main-links" to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}


export default withRouter(Navbar)