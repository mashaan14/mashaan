import React from "react";
import "./ResearchCard.css";

const ResearchCard = ({ author, title, journal, links = [] }) => {
  return (
    <div className="research-card">
      <div className="research-author">{author}</div>
      <div className="research-title">{title}</div>
      <div className="research-journal">{journal}</div>
      <div className="research-links">
        {links.map((link, index) => (
          <a
            key={index}
            className="research-button"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResearchCard;
