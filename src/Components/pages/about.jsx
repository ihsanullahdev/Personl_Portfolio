import React from "react";
import "./about.css";
import profileImage from "../../assets/ihsan.jpeg";

const journey = [
  "Self-learning",
  "Practical Projects",
  "Continuous Improvement",
];

const whatIDo = [
  "Responsive Web Interfaces",
  "React Applications",
  "Reusable Components",
  "Modern UI Development",
];

function About() {
  return (
    <section className="about">
      {/* Intro Section */}
      <div className="about_intro">
        <div className="about_image">
          <img src={profileImage} alt="Ihsan Ullah Afridi" />
        </div>

        <div className="about_intro_content">
          <h1>About Me</h1>

          <p>
            I’m Ihsan Ullah Afridi, a <strong>Frontend Developer</strong> and
            first-semester student pursuing an{" "}
            <strong>Associate Degree in Web Design and Development.</strong> I
            have approximately{" "}
            <strong>6+ months of practical frontend experience</strong> through
            self-learning and personal projects.
          </p>

          <p>
            I’m currently focused on{" "}
            <strong>polishing my frontend skills</strong> and gaining strong
            practical experience with modern technologies such as{" "}
            <strong>
              HTML, CSS, JavaScript, React, Tailwind CSS, React Router, and
              Redux.
            </strong>
          </p>

          {/* Journey */}
          <div className="about_section">
            <h3>My Journey</h3>

            <p>
              <strong>6+ Months of Frontend Development</strong>
            </p>

            <ul className="about_list">
              {journey.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Full Width Content */}
      <div className="about_full_content">
        {/* Technologies */}
        <div className="about_section">
          <h3>Technologies</h3>

          <div className="technology_tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>React Router</span>
            <span>Redux</span>
            <span>Git & GitHub</span>
          </div>
        </div>

        {/* What I Do */}
        <div className="about_section">
          <h3>What I Do</h3>

          <ul className="about_list">
            {whatIDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="about_section">
          <h3>Education</h3>

          <p>
            <strong>Associate Degree in Web Design and Development</strong>
            <br />
            Currently — <strong>First Semester</strong>
          </p>
        </div>

        {/* Currently Learning */}
        <div className="about_section">
          <h3>Currently Learning</h3>

          <p>
            Currently, I’m focused on strengthening my frontend development
            skills through practical projects and real-world development
            practices, with the goal of becoming confident and industry-ready in
            frontend development.
          </p>

          <p>
            Alongside this, I’m gradually learning backend development so that
            by the time I complete my degree, I can grow into a well-rounded
            <strong> Full-Stack Developer.</strong>
          </p>
        </div>

        {/* Goal */}
        <div className="about_section">
          <h3>My Goal</h3>

          <p>
            <strong>Become a professional Full-Stack Developer</strong> by
            building strong frontend expertise first and gradually expanding
            into backend development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
