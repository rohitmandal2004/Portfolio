import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'N26',
      role: 'Senior Software Engineer',
      duration: '2023 - Present',
      location: 'Berlin, Germany',
      description: 'Leading the front-end development team, architecting scalable React applications, and improving web performance across all core products.'
    },
    {
      company: 'Tech Startup Inc.',
      role: 'Software Engineer',
      duration: '2020 - 2023',
      location: 'Remote',
      description: 'Built and maintained multiple user-facing features using modern JavaScript frameworks. Collaborated closely with design teams to implement pixel-perfect UIs.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title serif">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              <div className="company-info">
                <strong>{exp.company}</strong> &mdash; <span>{exp.location}</span>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
