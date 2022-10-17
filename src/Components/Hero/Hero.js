import React from "react"
import "../Hero/hero.css"
import image from "../../assets/images/hero-picture.jpg"

const Hero = () => {

  return (
    <>
      <div className="hero" id='home'>
        <div className="hero-container vh-100">
          <div>
            <h1 className="hero-title"> Iván Cruz - Web Developer </h1>
            <h2 className="h2-style"> ¡Welcome to my portfolio!</h2>
          </div>
          <img className="hero-image rounded" src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;