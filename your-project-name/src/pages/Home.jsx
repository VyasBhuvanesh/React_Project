import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => (
  <main>
    <Hero /> 
    <section className="intro">
      <h2>Welcome to Vastu Consultancy</h2>
      <p>We combine traditional Vastu Shastra principles with expert construction services to create spaces that promote health, wealth, and happiness.</p>
      <div className="features">
        <div className="feature">
          <h3>Balanced Designs</h3>
          <p>Ensure positive energy flow in your home or office.</p>
        </div>
        <div className="feature">
          <h3>Expert Construction</h3>
          <p>Quality builds with modern techniques.</p>
        </div>
        <div className="feature">
          <h3>Consultations</h3>
          <p>Personalized advice for your projects.</p>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
