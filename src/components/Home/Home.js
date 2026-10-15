import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope, FaYoutube, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ReactComponent as SaudiFlag } from "../../Assets/Flag_of_Saudi_Arabia.svg";
import { ReactComponent as KfupmIcon } from "../../Assets/Icon_KFUPM.svg";
import { ReactComponent as AustralianFlag } from "../../Assets/Flag_of_Australia.svg";
import { ReactComponent as SydneyIcon } from "../../Assets/Icon_sydney_uni.svg";
import Type from "./Type";
import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <header className="home-header">
          <h1 className="heading-name">
            <span className="home-name-latin">
              <span>Mashaan</span>
              <span>Alshammari</span>
            </span>
            <strong className="main-name-Arabic" lang="ar" dir="rtl">مشعان عواد الشمري</strong>
          </h1>
          <p className="home-position">
            <span>Senior Engineer, AI Solutions</span>
            <span aria-hidden="true">·</span>
            <span>Qualcomm</span>
          </p>
          <Type />
          <nav className="home-actions" aria-label="Featured links">
            <a
              className="home-action home-action-primary"
              href="https://youtube.com/@mashaan14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube aria-hidden="true" /> YouTube channel
            </a>
            <Link className="home-action" to="/Research">View research</Link>
            <a className="home-action" href="mailto:mashaan.awad@outlook.com">Contact</a>
          </nav>
        </header>

        <section className="home-about-section" aria-labelledby="home-about-title">
          <h2 id="home-about-title" className="home-section-title">Research and background</h2>
          <p className="home-about-body">
            My research interests include graph neural networks and vision transformers. I also explore neural radiance fields and 3D reconstruction. I share research experiments on{" "}
            <a href="https://youtube.com/@mashaan14" target="_blank" rel="noopener noreferrer">YouTube</a> and publish technical posts on my{" "}
            <a href="https://mashaan14.github.io/YouTube-channel" target="_blank" rel="noopener noreferrer">blog</a>.
            <br />
            I got my M.S. in Computer Science from{" "}
            <a href="https://www.kfupm.edu.sa/" target="_blank" rel="noopener noreferrer">King Fahd University of Petroleum and Minerals (KFUPM)</a>{" "}
            <KfupmIcon className="flag-icons" aria-hidden="true" /> <SaudiFlag className="flag-icons" aria-hidden="true" /> in 2016, and a Ph.D. in Computer Science from{" "}
            <a href="https://www.sydney.edu.au/" target="_blank" rel="noopener noreferrer">the University of Sydney</a>{" "}
            <SydneyIcon className="flag-icons" aria-hidden="true" /> <AustralianFlag className="flag-icons" aria-hidden="true" /> in 2021.
          </p>
        </section>

        <section className="home-about-social" aria-labelledby="home-social-title">
          <h2 id="home-social-title" className="home-about-social-text">Find me on</h2>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a href="mailto:mashaan.awad@outlook.com" className="home-social-icons" aria-label="Email Mashaan">
                <FaRegEnvelope aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://youtube.com/@mashaan14" className="home-social-icons" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://github.com/mashaan14" className="home-social-icons" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://x.com/mashaan_14" className="home-social-icons" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaXTwitter aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://linkedin.com/in/mashaan" className="home-social-icons" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Home;
