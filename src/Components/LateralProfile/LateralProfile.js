import React, { useState } from "react"
import "../LateralProfile/lateralProfile.css"
import image from "../../assets/images/Profile.jpeg"
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook, } from 'react-icons/bs';
import { CgClose, CgMenuGridO } from 'react-icons/cg'

const  LateralProfile = () => {
    const [display, setDisplay] = useState(false)

    const handleClick = () => {
      setDisplay(current => !current)
    }

  return (
    <section>
      <div className="lateral-profile-style position-fixed">
        <div className="profile">
          <img src={image} className="navbar-img" alt="" /> <br />
          <h3 className="profile-text" >Iván Cruz <br /> Web-Dev </h3>
          <div className="social-media fa-lg">
            <a href="https://www.linkedin.com/in/rafael-ivan-cruz/" target="_blank" rel='noreferrer' ><BsLinkedin /></a>
            <a href="https://github.com/RafaIvanCz" target="_blank" rel='noreferrer'><BsGithub /></a>
            <a href="https://www.instagram.com/ivan.cz/" target="_blank" rel='noreferrer'><BsInstagram /></a>
            <a href="https://www.facebook.com/evan.cz.7/" target="_blank" rel='noreferrer'><BsFacebook /></a>
          </div>
        </div>
        <div className='menu-hamb' onClick={handleClick}>
          {display? <CgClose className='menu-icon'/> : <CgMenuGridO className='menu-icon'/>}
        </div>
        <div className={display? 'header' : 'display'}></div>
        <nav className="navbar">
          <a href="/#home" id="nav-home" className="nav-item" onClick={handleClick}>Home</a>
          <a href="/#about" id="nav-about" className="nav-item" onClick={handleClick}>About</a>
          <a href="/#portfolio" id="nav-portfolio" className="nav-item" onClick={handleClick}>Portfolio</a>
          <a href="/#contact" id="nav-contact" className="nav-item" onClick={handleClick}>Contact</a>
        </nav>
      </div>
    </section>
  );
}

export default LateralProfile