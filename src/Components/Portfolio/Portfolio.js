import React from "react"
import "../Portfolio/portfolio.css"
import Migo from "../../assets/images/Migo.jpg"
import Veterinary from "../../assets/images/Veterinary1.jpg"

const Portfolio = () => {


  return (
    <section>
      <div className="portfolio vh-100" id="portfolio">
        <div className="portfolio-title rounded-3">
          <h1>Portfolio</h1>
        </div>
        <h2 className="projects-text">Check out the projects I participated.</h2>
        <div className="row row-container">
          <div className="col col-container">
            <a className="img-style" href="https://migo-community.netlify.app/" target="_blank" rel="noreferrer">
              <img className="portfolio-img rounded" src={Migo} alt="" />
            </a>
            <h5>"MIGO - community" is a Social Media project where I could participate along with my teammates and we put into practice languages likes HTML5, CSS3, Bootstrap and Javascript.</h5>
          </div>
          <div className="col col-container">
            <a className="img-style" href="https://github.com/nicolascianci/proyecto-final-RC-veterinaria" target="_blank" rel="noreferrer">
              <img className="portfolio-img rounded" src={Veterinary} alt="" />
            </a>
            <h5>"La Huellita Veterinaria" is the second project I participated where we put into practice the following languages for building it: HTML5, CSS3, Bootstrap, Javascript, React, Express, Postman and Mongodb.</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;