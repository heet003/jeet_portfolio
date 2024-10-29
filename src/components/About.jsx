/*eslint-disable */
import React from "react";
import { facebook, instagram, twitter, linkedin } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen relative">
        <div className="w-[33%] about-section absolute top-0 left-0 h-full"></div>

        <div className="relative flex w-full justify-center items-center z-10">
          <div className="rounded-sm shadow-xl flex flex-col items-center max-w-sm bg-white ">
            <div className=" about-container px-[3rem] py-[1.5rem]">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://t4.ftcdn.net/jpg/01/33/03/89/360_F_133038922_PucwWmlsp2YDuyxi2NPTDw65cpdJALlP.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-center">
                Jeet Sadaria
              </h2>
              <hr className="w-[20%] border-1 border-blue-700 m-auto rounded-3xl my-2" />
              <p className="text-gray-600 w-full text-[16px] text-center mb-6 tracking-widest">
                Electronic Engineer
              </p>
            </div>
            <div className="flex flex-row space-x-4 p-2">
              <a>
                <img
                  src={facebook}
                  className="w-[20px] h-fit cursor-pointer"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/jeet_sadaria_3974/?utm_source=ig_web_button_share_sheet"
                target="_blank"
              >
                <img
                  src={instagram}
                  className="w-[20px] h-fit cursor-pointer"
                  alt="Instagram"
                />
              </a>
              <a>
                <img
                  src={twitter}
                  className="w-[20px] h-fit cursor-pointer"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jeet-sadaria-79674b26a/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="w-[20px] h-fit cursor-pointer"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left md:max-w-sm mt-8 md:mt-0 ml-8">
            <h1 className="text-5xl font-bold">Hello</h1>
            <p className="text-lg font-light text-gray-700 mt-4">
              Here's who I am & what I do
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start text-sm">
              <a href="/resume.pdf" download>
                <button className="bg-blue-600 text-white py-1 px-6 rounded-full font-medium hover:bg-blue-700">
                  Resume
                </button>
              </a>

              <Link to={`/projects`}>
                <button className="border-2 border-black text-black py-1 px-6 rounded-full font-medium hover:bg-gray-200">
                  Projects
                </button>
              </Link>
            </div>
            <p className="text-gray-600 mt-8 text-sm">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <p className="text-gray-600 mt-4 text-sm">
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
