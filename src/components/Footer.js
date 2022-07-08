import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaSchool,
  FaHome,
  FaPhone,
  FaInstagram
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-items">
        <p><FaHome/> Djelfa, Algeria</p>
        <p><FaSchool /> Si cherif benlahrech secondary school</p>
        <p><FaPhone /> +213 655 75 95 96</p>

        <div className="footer-links">
        <a href='https://github.com/nasreddine19' target='_blank' rel='noreferrer'>
            <FaGithub />
        </a>
        <a href='https://www.facebook.com/jack9552' target='_blank' rel='noreferrer'>
            <FaFacebook />
        </a>

        <a href='https://www.instagram.com/jack19557/' target='_blank' rel='noreferrer'>
            <FaInstagram />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
