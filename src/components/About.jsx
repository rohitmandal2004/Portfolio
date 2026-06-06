import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="section-header">
          <h2>About</h2>
          <div className="section-header-line"></div>
          <div className="section-header-icon">&gt;</div>
        </div>

        <div className="profile-grid">
          {/* Left Column */}
          <div className="profile-left brutal-reveal-hidden">
            <div className="profile-image-container">
               <img src="/assets/cartoon_avatar_hello.png" alt="Working" className="profile-image" />
            </div>
            
            <div className="contact-card">
              <div className="qr-placeholder">
                {/* Fake QR Code */}
                <div className="qr-squares"></div>
              </div>
              <div className="contact-info">
                <h3>Let's Work Together :</h3>
                <p>✉️ rohitmandal0804@gmail.com</p>
                <p>📞 +91 9378093270</p>
                <div className="social-buttons">
                  <a href="https://github.com/rohitmandal2004" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                    💻 GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/mandal-rohit/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                    💼 LinkedIn
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">
                    📸 Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="profile-right brutal-reveal-hidden delay-1">
            <h1 className="hello-text"><span className="quote">"</span> HELLO<span className="dot">.</span></h1>
            <div className="bio-text">
              <p>I'm <strong>Rohit Mandal</strong>, a passionate web developer with a knack for building robust applications. I love creating digital experiences that don't just work well — they tell a story.</p>
              <br/>
              <p>From complex backend architectures to sleek frontend interfaces, I enjoy bringing ideas to life through code and elegant design. I believe in writing clean, scalable code that makes an impact.</p>
            </div>

            <div className="resume-section">
              <h3 className="sub-heading">Education</h3>
              <div className="edu-list">
                <div className="edu-item">
                  <span className="edu-year">2024 -<br/><strong>Present</strong></span>
                  <div className="edu-details">
                    <h4>B.Tech – CSE (AI & ML)</h4>
                    <p>Brainware University | Barasat, West Bengal</p>
                    <p className="highlight-text">CGPA: 9.78/10</p>
                  </div>
                </div>
                <div className="edu-item">
                  <span className="edu-year">2020 -<br/><strong>2022</strong></span>
                  <div className="edu-details">
                    <h4>Higher Secondary (Class XII)</h4>
                    <p>Basirhat Town High School (H.S.) | Basirhat, WB</p>
                    <p className="highlight-text">Percentage: 87.6%</p>
                  </div>
                </div>
                <div className="edu-item">
                  <span className="edu-year">2019 -<br/><strong>2020</strong></span>
                  <div className="edu-details">
                    <h4>Secondary (Class X)</h4>
                    <p>Basirhat Town High School (H.S.) | Basirhat, WB</p>
                    <p className="highlight-text">Percentage: 84.7%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h3 className="sub-heading">Achievements</h3>
              <div className="timeline-container">
                 <div className="timeline-entry">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                       <h4>Google Gemini Campus Ambassador</h4>
                       <p className="company">Google</p>
                       <ul className="achievement-list">
                         <li>Promoted Google Gemini and AI tools within the campus community.</li>
                         <li>Organized workshops, events, and awareness sessions on AI and productivity tools.</li>
                         <li>Collaborated with students to encourage learning and innovation in technology.</li>
                       </ul>
                    </div>
                 </div>
                 <div className="timeline-entry">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                       <h4>CosmoHack 1.0 – Top 20 Team</h4>
                       <p className="company">SourcifyIN | Jan 2026</p>
                       <ul className="achievement-list">
                         <li>Secured a position in the Top 20 teams at CosmoHack 1.0 for innovation and teamwork.</li>
                       </ul>
                    </div>
                 </div>
                 <div className="timeline-entry">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                       <h4>Nexathon 1.0 Participation</h4>
                       <p className="company">Brainware University | Sep 2025</p>
                       <ul className="achievement-list">
                         <li>Participated in Nexathon 1.0 organized by the Department of CSE-AI, showcasing creativity, innovation, and teamwork.</li>
                       </ul>
                    </div>
                 </div>
              </div>
            </div>

            <div className="resume-section">
              <h3 className="sub-heading">Skills</h3>
              
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="software-tags">
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>C</span>
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>C++</span>
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>Java</span>
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>Python</span>
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>JavaScript</span>
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>HTML</span>
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>CSS</span>
                  <span className="software-tag" style={{background: '#3b82f6', color: '#fff'}}>SQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <div className="software-tags">
                  <span className="software-tag" style={{background: 'var(--accent-color)', color: '#000'}}>React.js</span>
                  <span className="software-tag" style={{background: 'var(--accent-color)', color: '#000'}}>Next.js</span>
                  <span className="software-tag" style={{background: 'var(--accent-color)', color: '#000'}}>Node.js</span>
                  <span className="software-tag" style={{background: 'var(--accent-color)', color: '#000'}}>Express.js</span>
                  <span className="software-tag" style={{background: 'var(--accent-color)', color: '#000'}}>Spring Boot</span>
                  <span className="software-tag" style={{background: 'var(--accent-color)', color: '#000'}}>Bootstrap</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Databases</h4>
                <div className="software-tags">
                  <span className="software-tag" style={{background: '#10b981', color: '#fff'}}>PostgreSQL</span>
                  <span className="software-tag" style={{background: '#10b981', color: '#fff'}}>MySQL</span>
                  <span className="software-tag" style={{background: '#10b981', color: '#fff'}}>MongoDB</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Platforms</h4>
                <div className="software-tags">
                  <span className="software-tag" style={{background: '#ef4444', color: '#fff'}}>Git</span>
                  <span className="software-tag" style={{background: '#ef4444', color: '#fff'}}>GitHub</span>
                  <span className="software-tag" style={{background: '#ef4444', color: '#fff'}}>AWS EC2</span>
                  <span className="software-tag" style={{background: '#ef4444', color: '#fff'}}>Docker</span>
                  <span className="software-tag" style={{background: '#ef4444', color: '#fff'}}>Kubernetes</span>
                  <span className="software-tag" style={{background: '#ef4444', color: '#fff'}}>Postman</span>
                </div>
              </div>

              <div className="skill-category">
                <h4> Languages</h4>
                <div className="software-tags">
                  
                  <span className="software-tag" style={{background: '#8b5cf6', color: '#fff'}}>English</span>
                  <span className="software-tag" style={{background: '#8b5cf6', color: '#fff'}}>Hindi</span>
                  <span className="software-tag" style={{background: '#8b5cf6', color: '#fff'}}>Bengali</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
