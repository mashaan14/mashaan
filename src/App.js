import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Research from "./components/Research/Research";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Teaching from "./components/Teaching/Teaching";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe2401"
    },
    secondary: {
      main: "#13273f"
    }
  }
});

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />          
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Research" element={<Research />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Teaching" element={<Teaching />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );

  return (
    <ThemeProvider theme={theme}>
      // MUI components
    </ThemeProvider>
  );
}

export default App;
