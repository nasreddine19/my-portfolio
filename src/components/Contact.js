import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// Contact us image
import contactUs from "../img/undraw_contact_us.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(e);

    emailjs
      .sendForm(
        "service_py4lyvj",
        "template_wdygh4s",
        form.current,
        "FgZAHrOSSCKOsp6D1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setTimeout(function(){
        // eslint-disable-next-line
        window. location. reload(1);
        }, 1000);
  };
  return (
    <div className="contact-container" id="contact">
      <h3 className="contact-header"> Contact us</h3>
      <div className="contact">
        <img className="contact-img" src={contactUs} alt="contact-pic" />
        <form className="cform-container" ref={form} onSubmit={sendEmail}>
          <label className="c-label">Name:</label>
          <input
            className="c-input"
            type="text"
            name="name"
            placeholder="e.g. Alinushka Linochka"
            required
          />

          <label className="c-label">Email:</label>
          <input
            className="c-input"
            type="email"
            name="email"
            placeholder="e.g. example@mail.com"
            required
          />

          <label className="c-label">Message:</label>
          <textarea
            className="c-message"
            rows="4"
            name="message"
            placeholder="Enter your message here"
            required
          />
          <input className="c-btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
