import React from "react"
import "../Skills/skills.css"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiTrello, SiMongodb } from "react-icons/si"

const Skills = () => {
  return (

    <section className="skills-section">
      <div className="skill-item">
        <FaHtml5 className="skill-icon"/>
        <p>HTML5</p>
      </div>
      <div className="skill-item">
        <FaCss3Alt className="skill-icon"/>
        <p>CSS3</p>
      </div>
      <div className="skill-item">
        <SiJavascript className="skill-icon"/>
        <p>Javascript</p>
      </div>
      <div className="skill-item">
        <FaBootstrap className="skill-icon"/>
        <p>Bootstrap</p>
      </div>
      <div className="skill-item">
        <FaReact className="skill-icon"/>
        <p>React</p>
      </div>
      <div className="skill-item">
        <FaGithub className="skill-icon"/>
        <p>Github</p>
      </div>
      <div className="skill-item">
        <FaNodeJs className="skill-icon"/>
        <p>NodeJs</p>
      </div>
      <div className="skill-item">
        <SiTrello className="skill-icon"/>
        <p>Trello</p>
      </div>
      <div className="skill-item">
        <SiMongodb className="skill-icon"/>
        <p>Mongodb</p>
      </div>
    </section>
  );
}

export default Skills;