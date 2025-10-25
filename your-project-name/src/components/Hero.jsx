import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Harmonize Your Space with Vastu & Construction Expertise</h1>
      <p>Building balanced homes and businesses through ancient wisdom and modern techniques.</p>
      <button>Learn More</button>
    </motion.div>
  </section>
);

export default Hero;
