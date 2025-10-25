import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="navbar md:flex md:justify-between md:items-center px-6 py-4"
    >
      <Link to="/" className="text-2xl font-bold text-orange-600">🏗️ Shreeji Vastu & Nirman</Link>

      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-orange-600 transition">Home</Link>
        <Link to="/services" className="hover:text-orange-600 transition">Services</Link>
        <Link to="/about" className="hover:text-orange-600 transition">About</Link>
        <Link to="/contact" className="hover:text-orange-600 transition">Contact</Link>
      </div>

      <div className="md:hidden text-2xl text-orange-600 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 font-medium"
        >
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
