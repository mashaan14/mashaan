import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Research from "./components/Research/Research";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <a
          className="skip-link"
          href="#main-content"
          onClick={(event) => {
            event.preventDefault();
            const main = document.getElementById("main-content");
            main?.focus();
            main?.scrollIntoView({ block: "start" });
          }}
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="site-main" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Research" element={<Research />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
