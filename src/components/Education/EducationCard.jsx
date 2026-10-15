import React from "react";
import "./EducationCard.css";

const EducationCard = ({ degree, institution, location, time, description, link }) => (
  <article className="education-card">
    <h2 className="degree">{degree}</h2>
    <h3 className="institution">{institution}</h3>
    <p className="time">{time} • {location}</p>
    {description && <p className="description">{description}</p>}
    {link && (
      <a
        href={link}
        className="education-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View thesis: ${degree}, ${institution}`}
      >
        Thesis
      </a>
    )}
  </article>
);

export default EducationCard;
