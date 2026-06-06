import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-typography">
          <h2 className="hero-subtitle">WEB DEVELOPER</h2>
          <h1 className="poster-title">
            <span className="layer-1">ROHIT</span><br/>
            <span className="layer-2">MANDAL<span className="dot">.</span></span>
          </h1>
          
          <div className="floating-icon icon-1">⚙️</div>
          <div className="floating-icon icon-2">💻</div>
          <div className="floating-icon icon-3">🚀</div>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src="/assets/avatar_new.png" 
            alt="Rohit Portrait" 
            className="hero-image"
          />
        </div>

      </div>
      
      <div className="scroll-indicator">
        <span className="arrow">&gt;</span> Rohit
      </div>
    </section>
  );
};

export default Hero;
