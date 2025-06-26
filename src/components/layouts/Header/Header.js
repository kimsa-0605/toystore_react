import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="header-container" className="header-container">
      <div className="header-content">
        <div className="header-contact">
          <div className="header-contact-content">
            <div className="header-contact-phonenumber-email">
              <span className="header-contact-phonenumber">Call Us: +84 877152961</span>
              <span className="header-contact-email">Email: <u>toystore@gmail.com</u></span>
            </div>
            <div className="header-contact-icons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="header-nav-bar">
          <div className="header-nav-content">
            <div className="header-logo-menu">
              <Link to="/" className="header-logo">ToyStore</Link>
              <i className="fa-solid fa-bars menu-icon" onClick={() => setMenuOpen(!menuOpen)}></i>
              {menuOpen && (
                <div className="dropdown-menu">
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                  <Link to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</Link>
                  <Link to="/delivery" onClick={() => setMenuOpen(false)}>Delivery</Link>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                  <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link>
                </div>
              )}
            </div>

            <div className="header-nav-cart">
              <div className="header-nav-title">
                <Link className="header-nav-title-hover" to="/catalog">Catalog</Link>
                <Link className="header-nav-title-hover" to="/delivery">Delivery</Link>
                <Link className="header-nav-title-hover" to="/about">About</Link>
                <Link className="header-nav-title-hover" to="/contacts">Contacts</Link>
              </div>
              <div className="header-cart-icon">
                <i className="bi bi-cart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
