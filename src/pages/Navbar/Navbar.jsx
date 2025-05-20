import React, { useState } from 'react';
import './Navbar.css';
import Banner from './Banner';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo">
          PREMIER<br />HOUSEWARES
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <div className="nav-item dropdown">
            NEW IN
            <div className="mega-dropdown">
              <div className="column">
                <h4>Shop By Category</h4>
                <ul>
                  <li><a href="#">New Furniture</a></li>
                  <li><a href="#">New Accessories</a></li>
                  <li><a href="#">New Kitchen and Dining</a></li>
                  <li><a href="#">New Bathe and Utility</a></li>
                </ul>
              </div>
              <div className="column">
                <h4>Shop By Brand</h4>
                <ul>
                  <li><a href="#">New Fifty Five South</a></li>
                  <li><a href="#">New Interiors by Premier</a></li>
                  <li><a href="#">New Masion by Premier</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-item dropdown">
            FURNITURE
            <div className="mega-dropdown">
              <div className="column">
                <h4>Furniture Types</h4>
                <ul>
                  <li><a href="#">Sofas</a></li>
                  <li><a href="#">Chairs</a></li>
                  <li><a href="#">Tables</a></li>
                  <li><a href="#">Beds</a></li>
                </ul>
              </div>
              <div className="column">
                <h4>Room</h4>
                <ul>
                  <li><a href="#">Living Room</a></li>
                  <li><a href="#">Bedroom</a></li>
                  <li><a href="#">Dining Room</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-item">ACCESSORIES</div>
          <div className="nav-item">LIGHTING</div>
          <div className="nav-item">KITCHEN AND DINING</div>
          <div className="nav-item">BATHE AND UTILITY</div>
          <div className="nav-item">OUTDOOR</div>
        </nav>

        <div className="right">
          <div className={`extra-links ${menuOpen ? 'active' : ''}`}>
            <a href="#">Inspiration</a>
            <a href="#"><strong>Virtual Showrooms</strong></a>
            <a href="#">Create New Trade Account</a>
            <a href="#">Sign In</a>
          </div>

          <div className={`icons ${menuOpen ? 'active' : ''}`}>
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <i className="fas fa-search"></i>
            </div>
            <i className="fas fa-share-alt"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user"></i>
            <i className="fas fa-bag-shopping"></i>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
