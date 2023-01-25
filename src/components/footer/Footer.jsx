import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com"><FaFacebookF /></a>
        <a href="http://instagram.com"><BsInstagram /></a>
        <a href="http://linkedin.com"><FaLinkedinIn /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All Rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;