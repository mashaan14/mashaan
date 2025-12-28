import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ title, location, time, description }) => {
  return (
    <div className="experience-card">
      <div className="experience-content">
        <div className="experience-header">
          <div className="experience-title-wrapper">
            <h3 className="experience-title">{title}</h3>
            <span className="experience-time">{time}</span>
          </div>
        </div>
        <p className="experience-location">{location}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;