/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInSlowly, fadeIn } from "../utils/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const instagram_link = import.meta.env.VITE_APP_INSTAGRAM;
  const facebook_link = import.meta.env.VITE_APP_FACEBOOK;
  const twitter_link = import.meta.env.VITE_APP_TWITTER;
  const linkedin_link = import.meta.env.VITE_APP_LINKEDIN;

  return (
    <motion.footer
      className="mt-10"
      initial="hidden"
      whileInView="show"
      variants={fadeInSlowly(0.2, 1.5)}
    >
      <hr className="w-[90%] border-t-1 border-black m-auto" />

      <motion.h2
        className="text-3xl font-bold text-center py-6"
        variants={fadeIn("up", "spring", 0.3, 1)}
      >
        VAYU VIKRANT
      </motion.h2>

      <div className="container mx-auto py-6 flex flex-col items-center md:flex-row md:justify-between px-[4rem]">
        <motion.div
          className="flex flex-col items-center md:items-start space-y-4 mb-4"
          initial="hidden"
          whileInView="show"
          variants={fadeIn("left", "spring", 0.5, 1)}
        >
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
        </motion.div>

        <motion.div
          className="flex flex-col items-center md:items-end space-y-4 mb-4"
          initial="hidden"
          whileInView="show"
          variants={fadeIn("right", "spring", 0.5, 1)}
        >
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
        </motion.div>
      </div>

      <hr className="w-[90%] border-t-1 border-black m-auto" />
      <motion.p
        className="text-gray-500 text-center mt-6 mb-4"
        initial="hidden"
        whileInView="show"
        variants={fadeInSlowly(0.7, 1.5)}
      >
        &copy; {currentYear} by Jeet Sadaria.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
