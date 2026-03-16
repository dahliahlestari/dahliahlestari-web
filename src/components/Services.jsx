import React from 'react';
import './Services.css';
import dalImg from '../assets/Dal.jpg';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container services-container">
        
        <div className="services-header">
           <div className="skill-label">
             <span className="bullet-diamond">♦</span>
             <span className="skill-text">What I Do</span>
           </div>
           <h2 className="services-title">
             to create visual content and<br/>
             digital strategies that help<br/>
             Brand grow online.
           </h2>
        </div>

        <div className="services-list">
          
          <div className="service-item fade-in">
            <div className="service-number">/01</div>
            <div className="service-content">
              <h3>Creative Design</h3>
              <p>Creating strong visual identities and promotional designs that communicate brand messages clearly and attract attention.</p>
              <ul className="service-details">
                <li>1. Social Media Design</li>
                <li>2. Campaign & Promotional Design</li>
                <li>3. Brand Visual Identity</li>
              </ul>
            </div>
          </div>

          <div className="service-item fade-in">
            <div className="service-number">/02</div>
            <div className="service-content">
              <h3>Content Production</h3>
              <p>Producing engaging visual content for social media through photography, videography, and short-form video editing.</p>
              <ul className="service-details">
                <li>1. Photography & Video content</li>
                <li>2. Videography & Reels Production</li>
                <li>3. Short-form Video Editing</li>
              </ul>
            </div>
          </div>

          <div className="service-item fade-in">
            <div className="service-number">/03</div>
            <div className="service-content">
              <h3>Social Media & Ads Strategy</h3>
              <p>Helping brands grow their audience and increase sales through strategic content planning and paid advertising.</p>
              <ul className="service-details">
                <li>1. Social Media Strategy (Instagram)</li>
                <li>2. Meta Ads (Facebook & Instagram Ads)</li>
                <li>3. Content Planning & Campaign Optimization</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="feature-card fade-in">
          <div className="card-left">
             <div className="abstract-shape">
                <div className="my-work-btn">MY WORK ↗</div>
             </div>
          </div>
          
          <div className="card-right">
             <div className="card-title-block">
                <span className="bullet-diamond">♦</span>
                <span className="about-us-label">About Us</span>
             </div>
             <h3 className="feature-title">I Create Visual Content That<br/>Drives Digital Growth</h3>
             <p className="feature-desc">
               I combine design, photography, video production, and digital market<br/>
               ing to help brands grow through impactful visual storytelling and<br/>
               strategic content.
             </p>
          </div>
        </div>

        <div className="author-block fade-in">
           <div className="author-text-side">
              <p className="author-role">Creative Designer & Digital Marketing Specialist</p>
              <h3 className="author-name">DAHLIAH FAJAR<br/>LESTARI</h3>
              <p className="author-skills">Adobe Family | Visual Studio | Figma | Canva | Davinci | Final Cut Pro | Meta Ads</p>
           </div>
           <div className="author-photo-side">
              <div 
                 className="author-photo-large"
                 style={{ backgroundImage: `url(${dalImg})` }}
              ></div>
           </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
