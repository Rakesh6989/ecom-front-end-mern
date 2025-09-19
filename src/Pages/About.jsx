// AboutUs.js
import React from "react";
import { useContext } from "react";
import { darkmodeContext } from "../Context/DarkModeContext";
function AboutUs() {
  const { dark } = useContext(darkmodeContext);
  return (
    <section
      className={`${
        dark ? "bg-black text-white" : "bg-white text-black"
      } py-16 px-6 md:px-12 lg:px-20`}
    >
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/10/10/05/52/website-8305451_1280.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a passionate team dedicated to building modern web
            applications that make an impact. With expertise in the MERN stack
            and cutting-edge technologies, we focus on delivering high-quality
            solutions for businesses and individuals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to create intuitive and scalable digital products
            while maintaining a strong commitment to innovation and excellence.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
