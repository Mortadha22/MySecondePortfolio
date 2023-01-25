import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x0qi1k8', 'template_nl86xxb', form.current, 'DEWN9fR9QMTEEPw9C')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contacte Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mortadhahajri2000@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCFSxCcLLGtwFdDFwwwKjmPVjbsqZDbNNkzRtsTgHlxXscxVTvVNQjssWbczZFSkWSstmL" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>MedMortadhaHajri</h5>
            <a href="https://www.messenger.com/t/100009139666308" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+216 58 104 932</h5>
            <a href="https://web.whatsapp.com/send?phone=+21658104932" target="_blank">Send a Message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;