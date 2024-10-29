/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInSlowly, slideIn } from "../utils/motion";

function HomePage() {
  return (
    <main className="relative flex flex-col items-start justify-center px-6 min-h-screen">
      <section className="relative w-full">
        <h1 className="text-7xl font-semibold text-gray-700 mt-9">
          Vayu Vikrant
        </h1>
        <p className="absolute bottom-0 text-right right-0 w-[70%] text-8xl text-gray-700 font-extralight">
          Strategy, Design and Everything in Between
        </p>
        <motion.img
          src="https://www.shutterstock.com/image-photo/modern-uav-drone-quadcopter-camera-600nw-2452714769.jpg"
          alt="Drone"
          className="mt-8 max-w-full h-auto"
          initial="hidden"
          whileInView="show"
          variants={fadeInSlowly(0.3, 1)}
        />
      </section>
      <div className="mt-12 p-4 w-[50%] text-gray-600 text-lg">
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={slideIn("left", "tween", 0.3, 0.5)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
          quaerat, sit in non ab, quam animi rem earum est minima quae quo
          tempora, cum aspernatur sapiente dignissimos illo? Officia reiciendis
          fugit eaque distinctio maxime quibusdam doloribus voluptates
          perspiciatis omnis, inventore, ex nesciunt itaque. Quae eum alias
          facilis earum ipsum.
        </motion.p>
        <a href="/" className="text-blue-500 underline my-5">
          All Projects
        </a>
      </div>
      <section className="mt-12 grid grid-cols-2 gap-0 m-auto p-0">
        <div className="col-span-1">
          <motion.img
            src="https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=2048x2048&w=is&k=20&c=4FkoHruSlP9bcggRixWv0AzH1k5ybLu1b3PXy6HoupM="
            alt="Drone Camera"
            className="w-full h-auto object-cover"
            initial="hidden"
            whileInView="show"
            variants={fadeInSlowly(0.3, 1)}
          />
        </div>
        <div className="col-span-1">
          <motion.img
            src="https://media.istockphoto.com/id/478200246/photo/isolated-flying-phantom-drone.jpg?s=2048x2048&w=is&k=20&c=91wlwPZ1XZ6N8vSHQ_nroi8PNwMShHDGlqsGG0wjisc="
            alt="Technology"
            className="w-full h-auto object-cover"
            initial="hidden"
            whileInView="show"
            variants={fadeInSlowly(0.3, 1)}
          />
        </div>
        <div className="col-span-2">
          <motion.img
            src="https://media.istockphoto.com/id/951069666/photo/unmanned-military-drone-on-patrol-air-territory-at-high-altitude.jpg?s=2048x2048&w=is&k=20&c=6qtIMZ60AY6R7NFBQgIYKcKf3IHHgi8TbgbfVOPG530="
            alt="Circuit Board"
            className="w-full h-auto object-cover"
            initial="hidden"
            whileInView="show"
            variants={fadeInSlowly(0.3, 1)}
          />
        </div>
        <div className="col-span-1">
          <motion.img
            src="https://media.istockphoto.com/id/935726026/photo/farmer-spraying-his-crops-using-a-drone.jpg?s=2048x2048&w=is&k=20&c=fY4Pvk-10Vd0MfduAU36215prwxNGlF0cN5qz2lBBsc="
            alt="Drone"
            className="w-full h-auto object-cover"
            initial="hidden"
            whileInView="show"
            variants={fadeInSlowly(0.3, 1)}
          />
        </div>
        <div className="col-span-1">
          <motion.img
            src="https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Circuit Board"
            className="w-full h-auto object-cover"
            initial="hidden"
            whileInView="show"
            variants={fadeInSlowly(0.3, 1)}
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
