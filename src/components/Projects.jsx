import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'STUDY FLOW',
    category: 'MERN STACK',
    color: '#fdb913',
    date: 'Mar 2026 - Apr 2026',
    image: '/assets/studyflow_banner.png',
    description: 'Study & Habit Tracking Platform',
    bullets: [
      'Developed a full-stack productivity web application incorporating authentication, task tracking, and habit management.',
      'Created interactive dashboards to manage 50+ daily tasks and habits, improving user productivity.',
      'Implemented REST APIs, enabled real-time updates, and integrated MongoDB for cross-device accessibility.'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/rohitmandal2004/studyflow-client',
    website: 'https://studyflow-client.vercel.app/'
  },
  {
    id: 2,
    title: 'STREAMIFY',
    category: 'FULLSTACK',
    color: '#FF6B6B',
    date: 'Nov 2025 - Mar 2026',
    image: '/assets/Streamify.png',
    description: 'Video Streaming Platform',
    bullets: [
      'Designed and developed a video streaming platform with a modern responsive UI and scalable backend architecture.',
      'Implemented secure user authentication, video categorization, search, and optimized content delivery.',
      'Focused on responsive frontend design, REST API integration, and efficient database management.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/rohitmandal2004/Streamify',
    website: 'https://streamifyfrontend.onrender.com/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="section-header">
          <h2>Selected Work</h2>
          <div className="section-header-line"></div>
          <div className="section-header-icon">&gt;</div>
        </div>

        <div className="poster-header-wrapper brutal-reveal-hidden">
          <h1 className="poster-title toc-title">
            RECENT <span className="highlight">PRO</span>JECTS<span className="dot">.</span>
          </h1>
        </div>

        <div className="neo-projects-grid">
          {projectsData.map((project, index) => (
            <div key={project.id} className={`neo-project-card brutal-reveal-hidden delay-${(index % 2) + 1}`} style={{ '--card-color': project.color }}>
              <div className="neo-project-image" style={{ height: '200px', backgroundImage: project.image ? `url(${project.image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                 {!project.image && (
                   <div className="neo-image-placeholder">
                      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Fredoka One', fontSize: '3.5rem', color: '#fff', textShadow: '4px 4px 0 #000', letterSpacing: '2px'}}>
                        {project.title.substring(0, 2)}
                      </div>
                   </div>
                 )}
              </div>
              <div className="neo-project-info">
                 <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                    <span className="neo-category" style={{marginBottom: 0}}>{project.category}</span>
                    <span style={{fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-secondary)'}}>{project.date}</span>
                 </div>
                 
                 <h3 style={{marginBottom: '0.5rem', fontSize: '2rem'}}>{project.title}</h3>
                 <p style={{fontFamily: 'Inter', fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem'}}>{project.description}</p>
                 
                 <ul className="project-bullets" style={{marginBottom: '2rem', flexGrow: 1, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
                   {project.bullets.map((bullet, i) => (
                     <li key={i} style={{marginBottom: '0.6rem', lineHeight: '1.5'}}>{bullet}</li>
                   ))}
                 </ul>

                 <div className="project-tech-tags" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem'}}>
                   {project.tech.map((t, i) => (
                     <span key={i} style={{fontSize: '0.75rem', padding: '0.3rem 0.8rem', border: '2px solid var(--text-primary)', borderRadius: '20px', fontWeight: '800', color: 'var(--text-primary)'}}>{t}</span>
                   ))}
                 </div>

                 <div style={{display: 'flex', gap: '1rem', marginTop: 'auto'}}>
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="neo-link-btn">GITHUB</a>
                   <a href={project.website} target="_blank" rel="noopener noreferrer" className="neo-link-btn" style={{backgroundColor: 'var(--bg-color)'}}>WEBSITE</a>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
