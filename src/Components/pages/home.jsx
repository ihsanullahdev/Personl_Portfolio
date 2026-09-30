import React from "react";
import Profile from "../Sidbar/profile";
import "./home.css";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Home() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ihsan-ullah-afridi/",
    },
    { icon: <FaGithubSquare />, url: "https://github.com/ihsanullahdev" },
  ];

  return (
    <section className="home">
      <div className="home_content">
        <Profile
          name="Ihsan Ullah Afridi"
          title="Frontend Developer | React Enthusiast | Associate Degree in Web Design and Development"
          description="I build clean, responsive, and user-friendly web interfaces using modern web technologies, with a focus on JavaScript and React."
          variant="large"
          socialLinks={socialLinks}
          showButton={true}
        />
      </div>
    </section>
  );
}

export default Home;
