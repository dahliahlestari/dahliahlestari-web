import React from 'react';
import './Intro.css';
import artboard1 from '../assets/Artboard 1.png';
import artboard3 from '../assets/Artboard 3.png';

const Intro = () => {
  return (
    <section className="intro" id="about">
      <div className="container intro-container">
        
        <div className="intro-text-column">
          <p className="intro-description fade-in">
            "I am a designer, but I am more than that. I am a problem solver and a 
            bridge between ideas and reality. I believe that creative minds can 
            have a meaningful impact on everyone, and innovative solutions focus 
            on building emotional connections."
          </p>
        </div>

        <div className="intro-visual-column">
          
          <div className="intro-left-visuals">
            <div className="intro-images">
              <div className="img-wrapper img-1">
                <div 
                  className="img-placeholder dark-pl"
                  style={{ backgroundImage: `url(${artboard1})` }}
                >
                </div>
              </div>
              <div className="img-wrapper img-2">
                <div 
                  className="img-placeholder light-pl"
                  style={{ backgroundImage: `url(${artboard3})` }}
                ></div>
              </div>
            </div>
            <div className="img-caption-block">
               <p className="img-caption-title">Personal Brand/</p>
               <p className="img-caption-sub">Special's /</p>
            </div>
          </div>
          
          <div className="intro-expertise fade-in">
            <h2 className="expertise-title">SPECIAL</h2>
            <p className="expertise-subtitle">@special.idl</p>
            <p className="expertise-details">
              is a personal creative identity<br/>
              focused on visual storytelling through<br/>
              graphic design, photography, and<br/>
              video. The brand serves as a space<br/>
              for experimental visuals, conceptual<br/>
              art, and digital content that blend<br/>
              creativity with modern visual culture.
            </p>
            <div className="explore-btn-wrapper">
              <span className="bullet-diamond">♦</span>
              <span className="about-text">About me</span>
              <div className="line-dec"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Intro;
