import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen  pt-[8rem] bg-gradient-to-br from-[#0A0F1D] via-[#12192A] to-[#0A0F1D] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact <span className="text-cyan-400">Laptopiya</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Have questions, feedback, or partnership ideas?  
            Our team is always ready to help you power up your tech journey ⚡
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center"
        >
          {[
            {
              icon: <Mail size={26} />,
              title: "Email Us",
              info: "support@laptopiya.com",
            },
            {
              icon: <Phone size={26} />,
              title: "Call Us",
              info: "+91 98765 43210",
            },
            {
              icon: <MapPin size={26} />,
              title: "Visit Us",
              info: "Laptopiya HQ, Bangalore, India",
            },
            {
              icon: <Clock size={26} />,
              title: "Working Hours",
              info: "Mon - Sat: 9AM - 7PM",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/40 border border-slate-700 hover:border-cyan-500/60 transition rounded-2xl py-6 px-4"
            >
              <div className="text-cyan-400 mb-2 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.info}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">
            Send Us a Message
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent! We'll reach out soon.");
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="youremail@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                required
                placeholder="Subject of your message"
                className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">
                Your Message
              </label>
              <textarea
                rows="5"
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                <Send size={18} /> Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Follow Us on Socials
          </h3>
          <div className="flex justify-center gap-6 text-slate-400">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-cyan-400 transition-transform transform hover:scale-110"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg"
        >
          <iframe
            title="Laptopiya Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6874937409983!2d77.59456231530389!3d12.971598790854245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1673f3479e77%3A0xaaa!2sBangalore%20India!5e0!3m2!1sen!2sin!4v1678523553567!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Footer */}
        <footer className="text-center mt-10 text-slate-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Laptopiya</span> — All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
