/*eslint-disable */
import React from "react";
import { facebook, instagram, twitter, linkedin } from "../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInSlowly } from "../utils/motion";

const About = () => {
  const profile = import.meta.env.VITE_APP_PROFILE_IMG;
  const instagram_link = import.meta.env.VITE_APP_INSTAGRAM;
  const facebook_link = import.meta.env.VITE_APP_FACEBOOK;
  const twitter_link = import.meta.env.VITE_APP_TWITTER;
  const linkedin_link = import.meta.env.VITE_APP_LINKEDIN;

  return (
    <React.Fragment>
      <motion.div
        className="flex min-h-screen relative px-4 sm:px-6"
        initial="hidden"
        animate="show"
        variants={fadeInSlowly(0, 1.5)}
      >
        <div className="w-[33%] about-section absolute top-0 left-0 h-full hidden md:block"></div>

        <div className="relative flex md:flex-row flex-col w-full justify-center items-center z-10">
          <div className="rounded-sm shadow-xl flex flex-col items-center max-w-sm sm:px-8sm:py-8 bg-white">
            <div className="about-container p-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg md:text-xl font-bold mb-2 text-center">
                Jeet Sadaria
              </h2>
              <hr className="w-16 md:w-[30%] border-1 border-blue-700 m-auto rounded-3xl my-2" />
              <p className="text-gray-600 text-[14px] sm:text-[16px] text-center mb-6 tracking-wide">
                Electronic Engineer
              </p>
            </div>

            <div className="flex flex-row space-x-4 p-2">
              <a href={facebook_link} target="_blank">
                <img
                  src={facebook}
                  className="w-5 h-fit cursor-pointer"
                  alt="Facebook"
                />
              </a>
              <a href={instagram_link} target="_blank">
                <img
                  src={instagram}
                  className="w-5 h-fit cursor-pointer"
                  alt="Instagram"
                />
              </a>
              <a href={twitter_link} target="_blank">
                <img
                  src={twitter}
                  className="w-5 h-fit cursor-pointer"
                  alt="Twitter"
                />
              </a>
              <a href={linkedin_link} target="_blank">
                <img
                  src={linkedin}
                  className="w-5 h-fit cursor-pointer"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left md:max-w-sm mt-8 md:mt-0 md:ml-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hello
            </h1>
            <p className="text-sm sm:text-md md:text-lg font-light text-gray-700 mt-4">
              Here's who I am & what I do
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start text-xs sm:text-sm">
              <a href="/resume.pdf" download>
                <button className="bg-blue-600 text-white py-1 px-4 sm:px-6 rounded-full font-medium hover:bg-blue-700">
                  Resume
                </button>
              </a>
              <Link to={`/projects`}>
                <button className="border-2 border-black text-black py-1 px-4 sm:px-6 rounded-full font-medium hover:bg-gray-200">
                  Projects
                </button>
              </Link>
            </div>
            <p className="text-gray-600 mt-8 text-xs sm:text-sm">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <p className="text-gray-600 mt-4 text-xs sm:text-sm ">
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </p>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default About;
