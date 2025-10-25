import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import video from '../asset/BACKV.mp4'
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_pjojjim';
    const templateId = 'template_7by8l46';
    const publicKey = 'DTn3CCKLVcPTnzyM3';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Shriji Vastu Nirman',
      to_email: 'shrijivastunirman@gmail.com',
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert('✅ Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('❌ Error sending email:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <main>
      <section className="contact">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="contact-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Contact Form Section */}
        <div className="contact-content">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>

          <div className="contact-info">
           
            <p><strong>Phone:</strong> +91-9890288529</p>
            <p><strong>Email:</strong> shrijivastunirman@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
