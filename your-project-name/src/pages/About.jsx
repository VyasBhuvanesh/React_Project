import React from 'react';
import './About.css';
import founderImage from './image1.png'; // ✅ adjust the path if needed

const About = () => (
  <main>
    <section className="about-container">
      <div className="about-card">
        <div className="about-image-container">
          <img
            src={founderImage}  // ✅ use imported variable
            alt="Founder"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Shriji Vastu Nirman</strong> — Where Construction Meets Harmony.
          </p>
          <p>
            Founded by <strong>Mr. Yogendra Vyas</strong>, Shriji Vastu Nirman stands as a trusted name in construction and Vastu consultancy with over 20 years of excellence. 
            With deep knowledge of traditional Vastu principles and modern engineering practices, Mr. Vyas has successfully guided and executed numerous residential, commercial, 
            and industrial projects across multiple cities in India.
          </p>
          <p>
            We believe every space should not only be structurally strong but also radiate positive energy and balance. 
            Our approach blends scientific design with spiritual harmony — ensuring that every project brings prosperity, peace, and productivity.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default About;
