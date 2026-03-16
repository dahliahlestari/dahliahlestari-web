import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">

        <div className="footer-top">
          <h2 className="footer-title">GET IN <span className="touch-italic">TOUCH</span></h2>
        </div>

        <div className="footer-main">
          <div className="footer-left">
            <p>For more info about projects or</p>
            <p>collaborations, please drop a message or contact</p>
            <p>me through my personal chat contact below.</p>

            <div className="social-links mt-4">
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">@dahliahlestari</a>
            </div>
          </div>

          <div className="footer-right">
            <p className="personal-contact">Personal Contact</p>
            <p className="phone">+62 8129 9723 970</p>
            <p className="email">Dahliahlestari@gmail.com</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
