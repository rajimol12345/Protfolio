import React from "react";

function Projects() {
  const projectsData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React.js and modern UI/UX.",
      tech: "React, CSS, JavaScript",
      link: "https://rajimol12345.github.io/Protfolio/",
      github: "https://github.com/rajimol12345/Protfolio",
    },
    {
      title: "Tourism Website",
      description: "A visually engaging and user-friendly tourism website.",
      tech: "HTML, CSS, JavaScript,Bootstrap",
      link: "https://rajimol12345.github.io/Tourisum-Website/",
      github: "https://github.com/rajimol12345/Tourisum-Website",
    },
  ];

  return (
    <div class="bg">
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;
