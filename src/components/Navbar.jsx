/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInSlowly } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center py-6 px-8 bg-white"
      initial="hidden"
      animate="show"
      variants={fadeInSlowly(0.3, 1)}
    >
      <div className="text-2xl font-semibold text-gray-800">
        <Link to={`/`}>Jeet Sadaria</Link>
      </div>
      <div className="flex space-x-8">
        <a href="/projects" className="nav_links text-bl">
          Projects
        </a>
        <a href="/about" className="nav_links">
          About
        </a>
        <a href="/contact" className="nav_links">
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
