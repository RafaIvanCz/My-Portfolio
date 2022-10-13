import React from "react"
import "../LateralProfile/lateralProfile.css"
import image from "../../assets/images/Profile.jpeg"
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook, } from 'react-icons/bs';

const  LateralProfile = () => {

  return (
    <>
      <div className=" position-relative ">
        <div className="style position-absolute vh-100">
          <div className="profile">
            <img src={image} className="picture" alt="" /> <br />
            <h3 className="profile-text" >Iván Cruz <br /> Web-Dev </h3>
            <div className="social-media fa-lg">
              <a href="https://www.linkedin.com/in/rafael-ivan-cruz/" target="_blank" rel='noreferrer' ><BsLinkedin /></a>
              <a href="https://github.com/RafaIvanCz" target="_blank" rel='noreferrer'><BsGithub /></a>
              <a href="https://www.instagram.com/ivan.cz/" target="_blank" rel='noreferrer'><BsInstagram /></a>
              <a href="https://www.facebook.com/evan.cz.7/" target="_blank" rel='noreferrer'><BsFacebook /></a>
            </div>
          </div>
          <nav className="navbar h-25">
            <a href="#/home" id="nav-home" onclick="active1()" className="nav-item">Home</a>
            <a href="#/about" id="nav-about" onclick="active2()" className="nav-item">About</a>
            <a href="#/portfolio" id="nav-portfolio" onclick="active3()" className="nav-item">Portfolio</a>
            <a href="#/contact" id="nav-contact" onclick="active4()" className="nav-item">Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default LateralProfile