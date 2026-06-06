import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize scroll animations
  useScrollReveal();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="app">
      <Cursor />
      {/* Multi-Layer Opening Reveal */}
      <div className="reveal-layer layer-1"></div>
      <div className="reveal-layer layer-2"></div>
      <div className="reveal-layer layer-3">
        <h1 className="reveal-text">ROHIT MANDAL</h1>
      </div>
      
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="global-decorator">ROHIT &copy; {new Date().getFullYear()}</div>
      
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Rohit. Designed with Poster Inspo.</p>
      </footer>
    </div>
  );
}

export default App;
