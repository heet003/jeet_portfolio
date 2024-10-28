/* eslint-disable */
import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen ">
      <div className=" rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-8xl text-gray-700 mb-10 font-light text-left mt-10">
          Contact Me
        </h2>
      </div>
      <div className="text-gray-700 text-lg w-full flex flex-col sm:flex-row sm:justify-evenly space-y-8 sm:space-y-0 px-10 mt-10">
        <div className="flex flex-col items-start">
          <p className="">Phone:</p>
          <span className="text-4xl w-[80%] text-gray-800 mt-2">
            123-456-7890
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="">Address:</p>
          <span className="text-4xl w-[50%] text-gray-800 mt-2">
            500 Terry Francine St. SF, CA 9415
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="">Mail:</p>
          <span className="text-4xl w-[80%] text-gray-800 mt-2">
            jeet@gmail.com
          </span>
        </div>
      </div>
      <div>
        <img
          src="https://www.livemint.com/lm-img/img/2024/08/27/1600x900/drone_cameras_1724750168143_1724750168466.jpg"
          alt="Drone"
          className="my-20"
        />
      </div>
    </section>
  );
};

export default Contact;
