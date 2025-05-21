import React from "react";
import "./ProjectCards.css";

const ProjectCard = ({ image, title, description, links }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
