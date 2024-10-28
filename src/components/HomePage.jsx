/* eslint-disable */
import React from "react";

function HomePage() {
  return (
    <main className="relative flex flex-col items-start justify-center px-6 min-h-screen">
      <section className="relative w-full">
        <h1 className="text-7xl font-semibold text-gray-700 mt-9">
          Vayu Vikarant
        </h1>
        <p className="absolute bottom-0 text-right right-0 w-[70%] text-8xl text-gray-700 font-extralight">
          Strategy, Design and Everything in Between
        </p>
        <img
          src="https://www.shutterstock.com/image-photo/modern-uav-drone-quadcopter-camera-600nw-2452714769.jpg"
          alt="Drone"
          className="mt-8 max-w-full h-auto"
        />
      </section>
      <div className="mt-12 p-4 w-[50%] text-gray-600 text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
          quaerat, sit in non ab, quam animi rem earum est minima quae quo
          tempora, cum aspernatur sapiente dignissimos illo? Officia reiciendis
          fugit eaque distinctio maxime quibusdam doloribus voluptates
          perspiciatis omnis, inventore, ex nesciunt itaque. Quae eum alias
          facilis earum ipsum.
        </p>
        <a href="/" className="text-blue-500 underline my-5">
          All Projects
        </a>
      </div>
      <section className="mt-12 grid grid-cols-2 gap-0 m-auto p-0">
        <div className="col-span-1">
          <img
            src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
            alt="Drone Camera"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://static9.depositphotos.com/1000276/1100/i/450/depositphotos_11008977-stock-photo-mountain-magic-landscape.jpg"
            alt="Technology"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-2">
          <img
            src="https://static5.depositphotos.com/1038117/477/i/450/depositphotos_4776743-stock-photo-waterfall-in-deep-forest.jpg"
            alt="Circuit Board"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s"
            alt="Drone"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/kirkjufell-mountain-free-image.jpg?w=600&quality=80"
            alt="Circuit Board"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
