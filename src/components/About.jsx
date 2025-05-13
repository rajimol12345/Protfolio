import React from 'react';
import profileImage from "./img/raji.jpg";

const About = () => {
  return (
    <div className="bg">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">RAJIMOL JC</span>, a passionate
            <span className="highlight"> Frontend Developer</span> with expertise in
            <span className="highlight"> React.js, JavaScript, and Python Fullstack</span>.
            I love crafting modern, responsive, and user-friendly web applications.
          </p>
          <p>
            With a strong foundation in <span className="highlight">HTML, CSS, and JavaScript</span>,
            I continuously explore new technologies to improve my skills and deliver outstanding projects.
          </p>
          <p>Let's build something amazing together! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default About;
