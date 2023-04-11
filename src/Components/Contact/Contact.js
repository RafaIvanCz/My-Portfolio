import React from "react"
import "../Contact/contact.css"
import { TbWorld } from "react-icons/tb"
import { BsWhatsapp, BsTelephoneInboundFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const Contact = () => {
  return (
    <section>
      <div className="contact vh-100" id="contact">
        <div className="contact-title rounded-3">
          <h1>Contact</h1>
        </div>
        <div className="row row-contact">
          <div className="col-md-6 contact-container">
            <div className="contact-section">
              <div className="contact-item">
                <TbWorld className="contact-icon" />
                <p className="text-items-contact">Tucumán <br/>Argentina</p>
              </div>
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <p className="text-items-contact">rafaelivancz@gmail.com</p>
              </div>
              <div className="contact-item">
                <BsTelephoneInboundFill className="contact-icon-call" />
                <BsWhatsapp className="contact-icon-wpp" />
                <p className="phone text-items-contact">+54 9 3815824231 <br /> <a href="tel:+5493815824231">Call Me</a></p>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28506.676561731845!2d-65.2770003460068!3d-26.73369749670022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942267bbdda8e121%3A0x3a9a0d94726a17eb!2zVGFmw60gVmllam8sIFR1Y3Vtw6Fu!5e0!3m2!1ses-419!2sar!4v1666294610504!5m2!1ses-419!2sar" className="map-style rounded-3" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="maps"></iframe>
          </div>
          <div className="col-md-6 form-container">
            <div className="form-text-style">
              <h2 className="fw-bold">If you want to contact me please write me a message.</h2>
            </div>
            <div className="form-style rounded-3">
              <div className="mb-3">
                <label for="name" className="form-label-name">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;