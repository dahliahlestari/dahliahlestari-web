import React from 'react';
import './Hero.css';
import artImage from '../assets/art.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div 
        className="hero-bg-overlay"
        style={{ backgroundImage: `url(${artImage})` }}
      ></div>
      
      {/* Optional: if we had the exact wing image, we'd place it here or as a background */}
      <div className="hero-blur-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-top-content fade-in">
          <div className="hero-desc-block">
            <p className="hero-greeting">
              Helping brands grow through visual<br/>
              storytelling, content production, and<br/>
              performance-driven ads.
            </p>
            <div className="learn-more-btn">
              <span className="arrow-long">⟶</span>
              <span>Learn More</span>
            </div>
          </div>
          <div className="hero-play-block">
             <div className="play-btn">▶</div>
             <span className="play-text">Life in Focus</span>
          </div>
        </div>

        <div className="hero-main-content fade-in">
          <h1 className="hero-title">
            <span className="serif-italic lowercase-m">I'm</span> Digital,<br/>
            Creative <span className="serif-normal lowercase-s">Specialist</span>
          </h1>
          
          <div className="hero-tags slide-up">
            <span>Graphic Design | Photography | Videography | Video Editing | Social Media & Facebook Ads</span>
          </div>
        </div>
        
        <div className="hero-bottom-right fade-in">
           <div className="view-portfolio-btn">View Portofolio</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
