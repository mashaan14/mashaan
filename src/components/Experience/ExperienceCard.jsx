import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ icon, title, location, time, description }) => {
  return (
    <div className="experience-card">
      <div className="experience-icon">
        <div className="experience-icon">{icon}</div>
      </div>
      <div className="experience-content">
        <div className="experience-header">
          <h3 className="experience-title">{title}</h3>
          <span className="experience-time">{time}</span>
        </div>
        <p className="experience-location">{location}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;