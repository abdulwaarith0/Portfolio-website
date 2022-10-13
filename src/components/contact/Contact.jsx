import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import "./contactMedia.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ih3bj8p",
        "template_7qmy41q",
        form.current,
        "jqVs88UVED7M06gOj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5 className="h-5">Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>abdulwaarithz@gmail.com</h5>
            <a href="mailto:abdulwaarithz@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FiTwitter className="contact_option_icon" />
            <h4>Twitter</h4>
            <h5>@abdulwaarith_z</h5>
            <a href="https://twitter.com/abdulwaarith_z" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>090 1174 8678</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2349017531807"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Abdulwaarith Zakariyya"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abdulwaarithz@gmail.com"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Type your message here......."
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Your Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
