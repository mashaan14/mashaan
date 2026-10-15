import React from "react";
import "./ProjectCards.css";

const ProjectCard = ({ category, image, title, description, links }) => {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" className="project-image" />
      </div>
      <p className="project-category">{category}</p>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label}: ${title}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
