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
            <p>I am a designer, but I am more than that.</p>
            <p>I create visual content, craft digital experiences,</p>
            <p>and build strategies that help brands grow in the digital world..</p>

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
