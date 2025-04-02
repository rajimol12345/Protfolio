import React from "react"

function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      university: "MS University,Nanjil Catholic College of Arts & Science",
      year: "2023 - 2025",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      university: "MS University,Nanjil Catholic College of Arts & Science",
      year: "2020 - 2023",
    },
    {
      degree: "Higher Secondary Education",
      university: "Govt Higher Secondary School Palukal",
      year: "2019 - 2020",
    },
    {
      degree: "Secondary School Certificate",
      university: "Govt Higher Secondary School Palukal",
      year: "2017 - 2018",
    },
  ];

  return (
    <div className="bg">
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <p className="university">{edu.university}</p>
            <p className="year">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Education;
