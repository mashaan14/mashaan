import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ title, location, time, description }) => {
  return (
    <article className="experience-card">
      <div className="experience-content">
        <div className="experience-header">
          <div className="experience-title-wrapper">
            <h2 className="experience-title">{title}</h2>
            <span className="experience-time">{time}</span>
          </div>
        </div>
        <p className="experience-location">{location}</p>
        <p className="experience-description">{description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;
