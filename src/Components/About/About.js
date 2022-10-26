import React from "react"
import "../About/about.css"
import imageAbout from "../../assets/images/About-img.jpg"
import Idioms from "../Idioms/Idioms"
import Skills from "../Skills/Skills";
import { GiDiploma } from "react-icons/gi"

const About = () => {
  return (
    <section>
      <div className="row gx-0 about-section vh-100" id="about">
        <div className="col">
          <div className="about-me rounded-3">
            <h1>About Me</h1>
          </div>
          <img src={imageAbout} className="about-img rounded" alt="..." />
          <div className="skills-section">
            <div className="skill-item">
              <GiDiploma className="skill-icon degree-icon"/>
              <p className="text-degree">High School Degree<br/><span className="span-degree">Business Expert</span></p>
            </div>
            <Idioms />
          </div>
        </div>
        <div className="col col-text vh-100">
          <h3 className="about-text">I am a Front-end Web Developer really interested in working in the IT field. I am willing to work remotely anywhere in the world. <br/></h3>
          <div className="skills rounded">
            <h3 className="skill-title">SKILLS</h3>
            < Skills />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;