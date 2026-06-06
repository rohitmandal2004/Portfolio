import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">

        <div className="hero-typography">
          <h1 className="poster-title">
            <span className="layer-1">ROHIT</span><br />
            <span className="layer-2">MANDAL<span className="dot">.</span></span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer | AI & ML Enthusiast | Student Ambassador 2026</h2>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/assets/hero_coding_avatar.png"
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
