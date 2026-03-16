import React from 'react';
import './Software.css';
import artboard2 from '../assets/Artboard 2.png';
import weImage from '../assets/we.png';

const Software = () => {
  return (
    <section className="software fade-in">
      <div className="software-skill-label">
        <span className="bullet-diamond">♦</span>
        <span className="skill-text">Skill</span>
      </div>
      <div className="container software-container">
        
        <div className="software-text-bg">
          <div className="text-row">PHOTOSHOP</div>
          <div className="text-row outline">ILLUSTRATOR</div>
          <div className="text-row highlight">SOFTWARE</div>
          <div className="text-row outline">AFTER EFFECT</div>
          <div className="text-row">DAVINCI</div>
        </div>

        <div className="software-images">
             <div className="sw-img-card card-1">
                <div 
                  className="placeholder-merch"
                  style={{ backgroundImage: `url(${weImage})` }}
                ></div>
             </div>
             <div className="sw-img-card card-2">
                <div 
                  className="placeholder-merch abstract"
                  style={{ backgroundImage: `url(${artboard2})` }}
                ></div>
             </div>
        </div>
      </div>
      <div className="software-bottom-btn">
         <div className="show-more-btn">Show More Work</div>
      </div>
    </section>
  );
};

export default Software;
