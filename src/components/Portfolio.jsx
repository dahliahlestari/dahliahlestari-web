import React, { useState } from 'react';
import './Portfolio.css';

// Importing existing assets for cards
import artImage from '../assets/art.png';
import artboard1 from '../assets/Artboard 1.png';
import artboard2 from '../assets/Artboard 2.png';
import artboard3 from '../assets/Artboard 3.png';
import weImage from '../assets/we.png';
import dalImg from '../assets/Dal.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Creative Commercial Reels",
      category: "video",
      description: "Short-form advertising video focusing on brand engagement and aesthetic storytelling.",
      image: artImage,
      link: "https://www.instagram.com/reel/C8r2Lp8tU8s/"
    },
    {
      id: 2,
      title: "Visual Brand Identity",
      category: "design",
      description: "Experimental conceptual designs, combining vintage and modern elements.",
      image: artboard1,
      link: "https://www.instagram.com/p/C3M8WpPyH4H/"
    },
    {
      id: 3,
      title: "Meta Ads & Social Campaign",
      category: "ads",
      description: "Performance-driven Meta Ads creative design and audience optimization strategy.",
      image: artboard2,
      link: "https://www.instagram.com/p/CwYd1Uht9yA/"
    },
    {
      id: 4,
      title: "Product Showcase",
      category: "video",
      description: "A high-fidelity Product video edit With smooth transitions.",
      image: artboard3,
      link: "https://www.instagram.com/reel/DThSPyKEulJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 5,
      title: "Interactive Social Media Layouts",
      category: "design",
      description: "Aesthetic Instagram carousel layout design tailored to grow organic followers.",
      image: weImage,
      link: "https://www.instagram.com/p/CuP0-dht5U8/"
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const skillsData = [
    {
      category: "Creative & Production",
      skills: [
        { name: "Videography & Reels", level: 90 },
        { name: "Video Editing (Davinci & Premiere)", level: 95 },
        { name: "Photography & Art Direction", level: 85 },
        { name: "Graphic Design & Branding", level: 90 },
        { name: "Visual Storytelling", level: 92 }
      ]
    },
    {
      category: "Marketing & Strategy",
      skills: [
        { name: "Meta Ads (FB & IG)", level: 88 },
        { name: "Social Media Strategy", level: 90 },
        { name: "Content Planning & Optimization", level: 92 },
        { name: "Copywriting & Scripting", level: 85 },
        { name: "Audience Target Research", level: 87 }
      ]
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container portfolio-container">

        {/* Section Header */}
        <div className="portfolio-header fade-in">
          <div className="portfolio-label">
            <span className="bullet-diamond">・</span>
            <span className="label-text">Portofolio</span>
          </div>
          <h2 className="portfolio-title text-serif">
            Selected Works & <span className="title-italic">Visual Highlights</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="portfolio-filters fade-in">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Works
          </button>
          <button
            className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`}
            onClick={() => setActiveFilter('video')}
          >
            Video / Reels
          </button>
          <button
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
            onClick={() => setActiveFilter('design')}
          >
            Graphic Design
          </button>
          <button
            className={`filter-btn ${activeFilter === 'ads' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ads')}
          >
            Social Media Ads
          </button>
        </div>

        {/* Grid Works */}
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-card slide-up">
              <div className="card-image-wrapper">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="card-overlay">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="play-icon-btn">
                    <svg viewBox="0 0 24 24" className="svg-play">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-category">{item.category.toUpperCase()}</span>
                  <span className="bullet-dot">・</span>
                  <span className="card-platform">Instagram</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Tonton di Instagram
                  <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="skills-container-box fade-in">
          <div className="skills-header">
            <div className="portfolio-label">
              <span className="bullet-diamond">・</span>
              <span className="label-text">Skills & Expertise</span>
            </div>
            <h3 className="skills-main-title">My Professional Capabilities</h3>
          </div>

          <div className="skills-grid">
            {skillsData.map((group, groupIdx) => (
              <div key={groupIdx} className="skills-category-card">
                <h4 className="skills-group-title text-serif">{group.category}</h4>
                <div className="skills-list-wrapper">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-progress-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
