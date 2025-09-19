// ContactUs.js
import React from "react";

function ContactUs() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Got a project idea or want to work with us? We’d love to hear from
            you. Drop a message and we’ll get back as soon as possible.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>📍 Maharashtra, Pune</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 hello@example.com</li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 w-full">
          <form className="bg-white shadow-md rounded-lg p-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
