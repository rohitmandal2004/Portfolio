import React from 'react';
import './Featured.css';

const Featured = () => {
  const features = [
    {
      icon: '🏆',
      title: "Appstore Editors' Choice",
      description: "My latest app is featured as 'Innovation made in India' at Appstore."
    },
    {
      icon: '⭐',
      title: "App of the Day",
      description: "Featured globally as App of the Day at Appstore."
    },
    {
      icon: '🐻',
      title: "One of the UX Essential Portfolios",
      description: "Featured by UX Collective as one of the 50 Essential Portfolios."
    },
    {
      icon: '🎨',
      title: "Design Leadership",
      description: "Speaking about Design Culture at global tech conferences."
    }
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="serif">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
