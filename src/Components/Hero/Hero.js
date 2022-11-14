import React from "react"
import "../Hero/hero.css"
import image from "../../assets/images/hero-picture.jpg"

const Hero = () => {

  return (
    <section>
      <div className="hero-container vh-100" id="home">
        <div className="position-sticky">
          <h1 className="hero-title"> Iván Cruz - Web Developer </h1>
          <h2 className="h2-style"> ¡Welcome to my portfolio!</h2>
          <img className="hero-image rounded" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;