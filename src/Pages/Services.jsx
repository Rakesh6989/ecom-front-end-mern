// Services.js
import React from "react";

function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide high-quality solutions to help you build and scale your
          business in the digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Card 1 */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
          <div className="text-blue-600 text-5xl mb-4">💻</div>
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-600">
            Build modern, responsive, and scalable web applications using MERN
            stack and cutting-edge tools.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-8 text-center hovers:shadow-xl transition">
          <div className="text-green-600 text-5xl mb-4">📱</div>
          <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
          <p className="text-gray-600">
            Cross-platform mobile solutions designed for seamless user
            experiences across all devices.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
          <div className="text-purple-600 text-5xl mb-4">☁️</div>
          <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
          <p className="text-gray-600">
            Scalable cloud integration and deployment to ensure high
            performance, security, and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
