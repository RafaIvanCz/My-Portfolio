import React from "react"
import "../Hero/hero.css"
import image from "../../assets/images/hero-picture.jpg"

const Hero = () => {

  return (
    <section className="hero-section">
      <div className="hero-container" id="home">
        <div className="position-sticky items-container">
          <h1 className="hero-title"> Iván Cruz - Web Developer </h1>
          <h2 className="h2-style"> ¡Welcome to my portfolio!</h2>
          <img className="hero-img center rounded" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;