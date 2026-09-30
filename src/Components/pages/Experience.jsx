import React from "react";
import "./Experience.css";

const technologies = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"];

const keyExperience = [
  "Responsive Web Development",
  "React Component Development",
  "React Router & State Management",
  "Reusable Component Design",
  "Practical Project Development",
  "Problem Solving & Code Improvement",
];

const currentFocus = [
  "Improving React & Frontend Architecture",
  "Building More Complex Projects",
  "Strengthening JavaScript",
  "Working Toward Industry-Ready Skills",
];

function Experience() {
  return (
    <section className="experience_container">
      {/* Header */}
      <div className="experience_header">
        <h1>Experience</h1>
        <p>
          My frontend development journey through self-directed learning and
          practical project development.
        </p>
      </div>

      {/* Main Experience */}
      <article className="experience_card">
        <div className="experience_card_header">
          <div>
            <h2>Frontend Development</h2>
            <h4>Self-Directed Development</h4>
          </div>

          <span className="experience_date">2026 — Present</span>
        </div>

        <p className="experience_duration">6+ Months</p>

        <p className="experience_description">
          I have been consistently developing my frontend skills through
          self-directed learning and practical projects.
        </p>

        {/* Technologies */}
        <div className="experience_block">
          <h3>Technologies</h3>

          <div className="experience_tags">
            {technologies.map((technology) => (
              <span className="experience_tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Key Experience */}
        <div className="experience_block">
          <h3>Key Experience</h3>

          <ul className="experience_list">
            {keyExperience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>

      {/* Current Focus */}
      <article className="experience_card">
        <div className="experience_card_header">
          <div>
            <h2>Frontend Development</h2>
            <h4>Current Focus</h4>
          </div>

          <span className="experience_date">2026 — Present</span>
        </div>

        <p className="experience_description">
          Currently focused on strengthening my frontend skills through advanced
          React concepts, practical projects, and modern frontend development
          practices.
        </p>

        <ul className="experience_list">
          {currentFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      {/* Future Direction */}
      <article className="experience_card future_card">
        <div className="experience_card_header">
          <div>
            <h2>Backend Development</h2>
            <h4>Future Direction</h4>
          </div>

          <span className="experience_status">Planned</span>
        </div>

        <p className="experience_description">
          Gradually expanding into backend development with the goal of becoming
          a <strong>Full-Stack Developer.</strong>
        </p>
      </article>
    </section>
  );
}

export default Experience;
