/* eslint-disable */
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const instagram_link = import.meta.env.VITE_APP_INSTAGRAM;
  const facebook_link = import.meta.env.VITE_APP_FACEBOOK;
  const twitter_link = import.meta.env.VITE_APP_TWITTER;
  const linkedin_link = import.meta.env.VITE_APP_LINKEDIN;
  return (
    <footer className=" mt-10">
      <hr className="w-[90%] border-t-1 border-black m-auto" />

      <h2 className="text-3xl font-bold text-center py-6">VAYU VIKRANT</h2>
      <div className="container mx-auto py-6 flex flex-col items-center md:flex-row md:justify-between px-[4rem]">
        <div className="flex flex-col items-center md:items-start space-y-4 mb-4">
          <a
            href="/projects"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Contact
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            About
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-4 mb-4">
          <a
            href={instagram_link}
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Instagram
          </a>
          <a
            href={linkedin_link}
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Linked In
          </a>
          <a
            href={twitter_link}
            className="text-gray-700 hover:text-blue-600 transition duration-200"
          >
            Twitter
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
