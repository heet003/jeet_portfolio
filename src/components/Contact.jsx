/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInSlowly } from "../utils/motion";

const Contact = () => {
  return (
    <motion.section
      className="min-h-screen"
      initial="hidden"
      animate="show"
      variants={fadeInSlowly(0, 1.5)}
    >
      <div className="rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 mb-10 font-light text-left mt-10">
          Contact Me
        </h2>
      </div>

      <div className="text-gray-700 sm:text-xl w-[90%] mx-auto flex flex-col justify-evenly lg:flex-row sm:flex-col space-y-8 space-x-8 sm:space-y-8 sm:px-0 mt-10">
        <div className="flex flex-col">
          <p>Phone:</p>
          <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mt-2">
            123-456-7890
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p>Address:</p>
          <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mt-2">
            500 Terry Francine St. SF, CA 9415
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p>Mail:</p>
          <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mt-2">
            jeet@gmail.com
          </span>
        </div>
      </div>

      <div className="my-10 sm:my-20">
        <img
          src="https://www.livemint.com/lm-img/img/2024/08/27/1600x900/drone_cameras_1724750168143_1724750168466.jpg"
          alt="Drone"
          className="object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Contact;
