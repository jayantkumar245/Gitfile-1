import "./Contact.css";
import { MdMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from "emailjs-com";

export default function Contact() {
  const form=useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_vu4g7jj", 'template_z8hsaev', form.current, 'GHo7ydjBIZrDM0Tdt')
      e.target.reset;
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMailOutline className="contact_option_icon"/>
            <h4>Email</h4>
            <h5>jayantkumar245@gmail.com</h5>
            <a
              href="mailto:jayantkumar25@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messanger</h4>
            <h5>JayantKumar</h5>
            <a href="http://m.me/jayant kumar">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon"/>
            <h4>What'sApp</h4>
            <h5>+91 9131845281</h5>
            <a href="http://api.whatsapp.com/send?phone=9131845281">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email ID"
            required
          ></input>
          <textarea
            name="message"
            row="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
}
