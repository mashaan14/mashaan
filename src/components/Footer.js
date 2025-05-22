import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { FaRegEnvelope, FaYoutube, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <p></p>
        </Col>        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:mashaan.awad@outlook.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaRegEnvelope />
              </a>
            </li>  
            <li className="social-icons">
              <a
                href="https://youtube.com/@mashaan14"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>                      
            <li className="social-icons">
              <a
                href="https://github.com/mashaan14"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/mashaan_14"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </li>            
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/mashaan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <p><small><small>The initial design was inspired by this <a href="https://github.com/soumyajit4419/Portfolio">repository</a>.</small></small></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
