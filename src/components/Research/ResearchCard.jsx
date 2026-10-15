import React from "react";
import "./ResearchCard.css";

const ResearchCard = ({ author, title, journal, links = [] }) => {
  const yearMatch = journal.match(/\b(?:19|20)\d{2}\b/);
  const year = yearMatch ? yearMatch[0] : "";
  const publication = year
    ? journal.replace(year, "").replace(/,\s*\./, ".").replace(/,\s*$/, "").replace(/\s+\./g, ".").trim()
    : journal;

  return (
    <article className="research-card">
      <p className="research-author">{author}</p>
      <h2 className="research-title">{title}</h2>
      <div className="research-publication">
        <p className="research-journal">{publication}</p>
        {year && <span className="research-year">{year}</span>}
      </div>
      <div className="research-links">
        {links.map((link, index) => (
          <a
            key={index}
            className="research-button"
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

export default ResearchCard;
