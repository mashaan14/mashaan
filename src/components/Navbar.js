import React, { useEffect, useState } from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const Icon = ({ name }) => (
  <span aria-hidden="true" className="material-symbols-outlined">
    {name}
  </span>
);

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <BootstrapNavbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={`site-navbar${scrolled ? " site-navbar-scrolled" : ""}`}
    >
      <Container>
        <BootstrapNavbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          onClick={() => setExpanded((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav as="nav" aria-label="Main navigation">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" end onClick={closeMenu}>
                <Icon name="home" /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Experience" onClick={closeMenu}>
                <Icon name="work" /> Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Education" onClick={closeMenu}>
                <Icon name="school" /> Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Research" onClick={closeMenu}>
                <Icon name="menu_book" /> Research
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Projects" onClick={closeMenu}>
                <Icon name="code_blocks" /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://mashaan14.github.io/YouTube-channel"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Icon name="edit_square" /> Blog
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
