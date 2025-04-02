import React from "react";

function Skills() {
  const skillsData = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "85%" },
    { name: "Python", level: "70%" },
    { name: "Django", level: "65%" },
    { name:"PHP",level:"50%"},
    { name:"SQL",level:"70%"},
    { name:"MYSQL",level:"80%"},
    { name: "Git & GitHub", level: "80%" },
  ];

  return (
    <div className="bg">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <p>{skill.name}</p>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
