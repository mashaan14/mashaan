import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.avif";
import Type from "./Type";
import { FaRegEnvelope, FaYoutube, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ReactComponent as Flag_of_Saudi_Arabia} from "../../Assets/Flag_of_Saudi_Arabia.svg";
import { ReactComponent as Icon_KFUPM} from "../../Assets/Icon_KFUPM.svg";
import { ReactComponent as Flag_of_Australia} from "../../Assets/Flag_of_Australia.svg";
import { ReactComponent as Icon_sydney_uni} from "../../Assets/Icon_sydney_uni.svg";

function Home() {
  return (
    <section>
      <Container fluid>
        
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!
              </h1>

              <h1 className="heading-name">
                I'm Mashaan Alshammari
                <br></br>
                <br></br>
                <strong className="main-name-Arabic"> مشعان عواد الشمري</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row md={8} className="home-about-description">
          <div>
            <p className="home-about-body">
            I currently work as a machine learning researcher. My research interests are in graph neural networks and vision transformers. Lately, I've been curious about neural radiance fields and 3D reconstruction. I post YouTube videos about my research experiments and also provide AI consulting services to organizations in Saudi Arabia.
            <br /><br />
            I began my career in 2010 as a system engineer at <a href="https://www.sabic.com/en"><b>SABIC</b></a>. In 2013, I decided to pursue a graduate degree. I got my M.S. degree in Computer Science from <a href="http://www.kfupm.edu.sa/"><b>King Fahd University of Petroleum and Minerals (KFUPM) </b></a>  
            <Icon_KFUPM className="flag-icons"/> <Flag_of_Saudi_Arabia className="flag-icons"/> in 2016, and the Ph.D. degree in Computer Science from <a href="https://www.sydney.edu.au/"><b>University of Sydney</b></a> <Icon_sydney_uni className="flag-icons"/> <Flag_of_Australia className="flag-icons"/> in 2021.
            </p>
          </div>
        </Row>          
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="home-about-social-text">FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:mashaan.awad@outlook.com"
                  className="icon-colour  home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <FaRegEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://youtube.com/@mashaan14"
                  className="icon-colour home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <FaYoutube />
                </a>
              </li>              
              <li className="social-icons">
                <a
                  href="https://github.com/mashaan14"
                  className="icon-colour  home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/mashaan_14"
                  className="icon-colour  home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <FaXTwitter />
                </a>
              </li>              
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/mashaan"
                  className="icon-colour  home-social-icons"
                  target="_blank" 
                  rel="noopener noreferrer"                  
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>          
        </Container>
      </Container>
    </section>
  );
}

export default Home;
