/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInSlowly } from "../utils/motion";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-6 md:px-8 "
      initial="hidden"
      animate="show"
      variants={fadeInSlowly(0.3, 1)}
    >
      {/* Logo / Title */}
      <div className="text-xl md:text-3xl font-semibold text-gray-800">
        <Link to="/">Jeet Sadaria</Link>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <Link to="/projects" className="nav_links text-gray-700 hover:text-blue-600">
          Projects
        </Link>
        <Link to="/about" className="nav_links text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="nav_links text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-white shadow-lg z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/projects"
              className="nav_links text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="nav_links text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="nav_links text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
