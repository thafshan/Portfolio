import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bk867mj', 'template_nc7hbsb', form.current, 'gpAOt7dLdcFvQ3w6h')
      .then((result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
          e.target.reset(); // Reset form after success
      }, (error) => {
          console.error('Email error:', error.text);
          alert('Failed to send message, please try again.');
      });
  };

  return (
    <div id='contact' className={styles.container}>
      <div className={styles.imagesRow}>
        <img src="/images/react.jpeg" alt="React" className={styles.techImage} />
        <img src="/images/JS.png" alt="JavaScript" className={styles.techImage} />
        <img src="/images/CSS.jpeg" alt="CSS" className={styles.techImage} />
        <img src="/images/HTML.png" alt="HTML" className={styles.techImage} />
      </div>

      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Contact Me</h1>
        <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" placeholder="Enter your email address" required />

          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company_name" placeholder="Enter your company name" />

          <label htmlFor="reason">Reason to Contact</label>
          <textarea id="reason" name="message" placeholder="Write your message here" rows="5" required />

          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
