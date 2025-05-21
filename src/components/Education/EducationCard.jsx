import React from "react";
import "./EducationCard.css";

const EducationCard = ({ degree, institution, location, time, description, link }) => (
  <div className="education-card">
    <h3 className="degree">{degree}</h3>
    <h4 className="institution">{institution}</h4>
    <p className="time">{time} • {location}</p>
    {link && (
      <a href={link} className="education-link" target="_blank" rel="noopener noreferrer">
        Thesis
      </a>
    )}
  </div>
);

export default EducationCard;
