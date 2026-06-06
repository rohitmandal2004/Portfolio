import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="neo-navbar">
      <div className="container neo-nav-container">
        <a href="#" className="neo-logo">ROHIT<span className="dot">.</span></a>
        <ul className="neo-nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className={`neo-slide-toggle ${isDarkMode ? 'toggled' : ''}`} onClick={toggleTheme} aria-label="Toggle Theme">
            <div className="toggle-thumb">
              {isDarkMode ? '☀️' : '🌙'}
            </div>
          </button>
          <a href="/assets/resume.pdf" download="Rohit_Mandal_Resume.pdf" className="neo-nav-btn">RESUME</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
