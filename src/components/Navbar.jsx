/* eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white">
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
    </nav>
  );
};

export default Navbar;
