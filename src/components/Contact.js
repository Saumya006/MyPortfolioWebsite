import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_brk5yvp', 'template_9nju48d', form.current, {
        publicKey: 'LkdCZnzRfxggN9m1t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id="contact">
        <h2>Contact Me</h2>
        <span className="contactdesc">Please Reach out to Me below to discuss any work opportunities. </span>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name='your_name' required />
            <input type="email" placeholder="Your Email" name='your_email' required />
            <textarea placeholder="Your Message" name='message' required></textarea>
            <button className='btn' type="submit" value='Send'>Submit</button>
        </form>
    </section>
  )
}

export default Contact
