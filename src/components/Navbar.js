import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";




import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {FaUserGraduate,
        FaToolbox,
} from "react-icons/fa";
import {BiLibrary} from "react-icons/bi";
import {PiChalkboardTeacherLight} from "react-icons/pi";

import { CgFileDocument } from "react-icons/cg";

const Icon = ({ name, style = {} }) => (
  <span className="material-symbols-outlined" style={{ verticalAlign: "middle", ...style }}>
    {name}
  </span>
);

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <Icon name="home"/> Home
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link as={Link} to="/Experience" onClick={() => updateExpanded(false)}>
              <Icon name="work" /> Experience
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link as={Link} to="/Education" onClick={() => updateExpanded(false)}>
              <Icon name="school"/> Education
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link as={Link} to="/Research" onClick={() => updateExpanded(false)}>
              <Icon name="menu_book"/> Research
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link as={Link} to="/Projects" onClick={() => updateExpanded(false)}>
              <Icon name="code_blocks" /> Projects
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link as={Link} to="/Services" onClick={() => updateExpanded(false)}>
              <Icon name="service_toolbox" /> Services
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link as={Link} to="/Teaching" onClick={() => updateExpanded(false)}>
              <Icon name="co_present" /> Teaching
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://mashaan14.github.io/YouTube-channel"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => updateExpanded(false)}
              >
                <Icon name="edit_square" /> Blog
              </Nav.Link>
            </Nav.Item>
          
            <Nav.Item>
            <Nav.Link as={Link} to="/Resume" onClick={() => updateExpanded(false)}>
              <Icon name="description" /> Resume
            </Nav.Link>
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
