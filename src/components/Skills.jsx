import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';
import { SiDjango, SiSqlite } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 size={50} color="#e34c26" />, name: 'HTML5' },
  { icon: <FaCss3Alt size={50} color="#264de4" />, name: 'CSS3' },
  { icon: <FaJs size={50} color="#f0db4f" />, name: 'JavaScript' },
  { icon: <FaReact size={50} color="#61dbfb" />, name: 'ReactJS' },
  { icon: <FaBootstrap size={50} color="#7952B3" />, name: 'Bootstrap' },
  { icon: <FaPython size={50} color="#4B8BBE" />, name: 'Python' },
  { icon: <SiDjango size={50} color="#092E20" />, name: 'Django' },
  { icon: <FaPhp size={50} color="#8892BF" />, name: 'PHP' },
  { icon: <FaDatabase size={50} color="#f29111" />, name: 'MySQL' },
  { icon: <SiSqlite size={50} color="#003B57" />, name: 'SQLite' },
  { icon: <FaGitAlt size={50} color="#F1502F" />, name: 'Git' },
  { icon: <FaGithub size={50} color="#333" />, name: 'GitHub' },
];

const SkillsScroll = () => {
  return (
    <div className="bg">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsScroll;
