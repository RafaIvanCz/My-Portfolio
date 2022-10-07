import React from "react"
import "../LateralProfile/lateralProfile.css"
import image from "../../assets/images/Profile.jpeg"
// import linkedin from "../../assets/images/linkedin.png"

const LateralProfile = () => {
  return (
    <>
      <div className=" position-relative ">
        <div id="menu-hamb" className="style position-absolute vh-100">
          <div className="profile d-flex flex-column align-items-center mt-3">
            <img src={image} className="picture" alt="" /> <br />
            <a className="profile-text" href="#/home">Iván Cruz <br /> <span>W</span>eb<span>D</span>ev</a>
            <div className="social-media">
              <link href="/https://www.linkedin.com/in/rafael-ivan-cruz" target="_black" className="fab fa-linkedin-in"></link>
              <link href="#/" target="_blank" className="fab fa-github"></link>
              <link href="#/" target="_blank" className="fab fa-instagram"></link>
              <link href="#/" target="_blank" className="fab fa-facebook-f"></link>
            </div>
          </div>
          <nav className="navbar h-25">
            <a href="#/home" id="nav-home" onclick="active1()" className="nav-item">Home</a>
            <a href="#/about" id="nav-about" onclick="active2()" className="nav-item">About</a>
            <a href="#/portfolio" id="nav-portfolio" onclick="active3()" className="nav-item">Portfolio</a>
            <a href="#/contact" id="nav-contact" onclick="active4()" className="nav-item">Contact</a>
          </nav>
          <div className="dark-mode">
            <i className="fas"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default LateralProfile;