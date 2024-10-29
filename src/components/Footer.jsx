/* eslint-disable */
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" mt-10">
      <hr className="w-[90%] border-t-1 border-black m-auto" />

      <h2 className="text-3xl font-bold text-center py-6">VAYU VIKRANT</h2>
      <div className="container mx-auto py-6 flex flex-col items-center md:flex-row md:justify-between px-[4rem]">
        <div className="flex flex-col items-center md:items-start space-y-4 mb-4">
          <a
            href="#portfolio"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-4 mb-4">
          <a
            href="https://instagram.com"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.net"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Linked In
          </a>
          <a
            href="https://pinterest.com"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Pinterest
          </a>
        </div>
      </div>
      <hr className="w-[90%] border-t-1 border-black m-auto" />
      <p className="text-gray-500 text-center mt-6 mb-4">
        &copy; {currentYear} by Jeet Sadaria.
      </p>
    </footer>
  );
};

export default Footer;
