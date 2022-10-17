import React from "react"
import "../About/about.css"
import imageAbout from "../../assets/images/About-img.jpg"
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <section className="about" id='about'>
      <hr className="hr-about"/>
      <div className="row gx-0 about-section vh-100">
        <div className="col">
          <h1 className="about-me rounded-3">About Me!</h1>
          <img src={imageAbout} className="about-img rounded" alt="..." />
          <h5 className="img-title-text">Some extra information about me.</h5>
          <h6 className="img-text">I am an amateur musician. I can play guitar, drums, bass, guitalele and ukelele. So, if you want to hear me, please click <a href="https://youtu.be/QKryMgUUiRY" target="_blank" rel="noreferrer">Here</a>. <br/> I really like playing football. I prefer movies instead of television programs.</h6>
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