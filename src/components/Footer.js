import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footersocial">
        <span className="footerdesc">Join/Follow Me:</span>
        <div className="socialtags">
        <a href="https://www.facebook.com/saumya.swati" target='_blank' rel="noopener noreferrer" id='facebook' className="footer-logo"><FaFacebook /></a>
        <a href="https://www.instagram.com/saumya__swati/" target='_blank' rel="noopener noreferrer" id='instagram' className="footer-logo"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/saumya-swati-64b212200/" target='_blank' rel="noopener noreferrer" id='linkedin' className="footer-logo"><FaLinkedin /></a>
        <a href="https://github.com/saumya006" id='github' target='_blank' rel="noopener noreferrer" className="footer-logo"><FaGithub /></a>
        </div>
    <footer>
      <p>Copyright © 2024 Saumya Swati | All rights reserved </p>
    </footer>
    </section>
    
  )
}

export default Footer
