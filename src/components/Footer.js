import React from "react";
import { FaRegEnvelope, FaYoutube, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav aria-label="Social links">
          <ul className="footer-icons">
          <li>
            <a href="mailto:mashaan.awad@outlook.com" aria-label="Email Mashaan">
              <FaRegEnvelope aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@mashaan14" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mashaan14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://x.com/mashaan_14" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mashaan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </li>
          </ul>
        </nav>
        <p className="footer-copywright">© {year} Mashaan Alshammari</p>
      </div>
    </footer>
  );
}

export default Footer;
