import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      institution: 'Brainware University',
      degree: 'B.Tech in Computer Science and Engineering(Specialization In Artificial Intelligence And Machine Learning)',
      duration: '2024 - 2028',
      cgpa: '9.78'
    },
    {
      institution: 'Basirhat Town High School(H.S)',
      degree: 'Higher Secondary',
      duration: '2020 - 2022',
      percentage: '86.7%'
    },
    {
      institution: 'Basirhat Town High School(H.S)',
      degree: 'Secondary',
      duration: '2019 - 2020',
      percentage: '84.7%'
    }

  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title serif">Education</h2>
        <div className="timeline">
          {educations.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-header">
                <h3>{edu.degree}</h3>
                <span className="duration">{edu.duration}</span>
              </div>
              <div className="company-info">
                <strong>{edu.institution}</strong>
              </div>
              <p>{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
