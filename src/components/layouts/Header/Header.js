import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div id="header-container" class="header-container">
        <div className="header-content">
          <div className="header-contact">
              <div className="header-contact-content">
                  <div className="header-contact-phonenumber-email">
                      <span className="header-contact-phonenumber">
                          Call Us: +1 213 974-5898
                      </span>
                      <span className="header-contact-email">
                          Email: <u>toystore@template.com</u>
                      </span>
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
                  <Link to="/" className="header-logo">ToyStore</Link>
                  <div className="header-nav-cart">
                      <div className="header-nav-title">
                          <Link className="header-nav-title-hover" to="/catalog">Catalog</Link>
                          <Link className="header-nav-title-hover" to="/delivery">Delivery</Link>
                          <Link className="header-nav-title-hover" to="/about">About</Link>
                          <Link className="header-nav-title-hover" to="/contacts">Contacts</Link>
                      </div>
                      <div className="header-cart-icon">
                          <span>Cart</span>
                          <i className="bi bi-cart"></i>
                          <span className="quantity-items-cart"><p>0</p></span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    );
};

export default Header;
