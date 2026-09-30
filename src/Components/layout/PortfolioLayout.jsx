import React from "react";
import "./PortfolioLayout.css";

import Sidbar from "../Sidbar/sidbar";
import Home from "../pages/home";
import About from "../pages/about";
import Experience from "../pages/Experience";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Contact from "../pages/Contact";

import { Routes, Route } from "react-router-dom";

function PortfolioLayout() {
  return (
    <div className="portfolio-layout">
      <aside className="sidebar">
        <Sidbar />
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default PortfolioLayout;
