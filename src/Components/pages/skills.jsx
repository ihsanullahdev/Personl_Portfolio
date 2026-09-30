import React from "react";
import "./skills.css";

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Redux Toolkit",
];

const developmentPractices = [
  "Responsive Design",
  "Reusable Components",
  "Client-Side Routing",
  "State Management",
];

const skillLevels = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "Tailwind CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Redux Toolkit", level: 60 },
];

function Skills() {
  return (
    <section className="skills_container">
      <div className="skills_header">
        <h2>Skills</h2>
        <p>
          Technologies and development practices I use to build modern web
          interfaces.
        </p>
      </div>

      <div className="skills_sections">
        {/* Frontend */}
        <div className="skills_card">
          <h3>Frontend Development</h3>

          <div className="skill_buttons">
            {frontendSkills.map((skill) => (
              <span className="skill_btn" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Practices */}
        <div className="skills_card">
          <h3>Development Practices</h3>

          <div className="skill_buttons">
            {developmentPractices.map((practice) => (
              <span className="skill_btn" key={practice}>
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Proficiency */}
      <div className="proficiency_card">
        <h3>Current Proficiency</h3>

        <div className="skills_list">
          {skillLevels.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill_info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress_bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
