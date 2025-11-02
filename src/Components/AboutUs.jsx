import { motion } from "framer-motion";
import {
  Laptop,
  Users,
  Globe,
  Rocket,
  Heart,
  Trophy,
  Target,
  ShieldCheck,
  Mail,
} from "lucide-react";

export default function LaptopiyaAboutUs() {
  return (
    <div className="min-h-screen pt-[8rem] bg-gradient-to-br from-[#0A0F1D] via-[#12192A] to-[#0A0F1D] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About <span className="text-cyan-400">Laptopiya</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            India’s trusted online laptop marketplace — bringing you the best of
            technology, deals, and reliability since 2020.  
            We’re not just selling laptops, we’re empowering your digital dreams.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
            <Target size={30} className="text-cyan-400 mb-3" />
            <h2 className="text-xl font-bold mb-2">Our Mission</h2>
            <p className="text-slate-300 text-sm">
              To make high-quality laptops and accessories accessible to every
              student, professional, and gamer across India — with unbeatable
              value, verified products, and fast delivery.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
            <Rocket size={30} className="text-blue-400 mb-3" />
            <h2 className="text-xl font-bold mb-2">Our Vision</h2>
            <p className="text-slate-300 text-sm">
              To be India’s #1 trusted laptop destination, powered by innovation,
              customer-first ethics, and tech-driven transparency.
            </p>
          </div>
        </motion.div>

        {/* Timeline / Our Journey */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-3xl font-bold mb-10 text-cyan-400">
            Our Journey
          </h2>
          <div className="relative border-l border-slate-700 max-w-3xl mx-auto">
            {[
              {
                year: "2020",
                title: "Laptopiya was founded",
                desc: "Started with a small team of 3 tech enthusiasts and 10 laptop models.",
              },
              {
                year: "2021",
                title: "Expanded nationwide",
                desc: "Partnered with top laptop brands and opened PAN India shipping.",
              },
              {
                year: "2023",
                title: "Crossed 1 Lakh Customers",
                desc: "A major milestone in customer satisfaction and trust.",
              },
              {
                year: "2025",
                title: "AI-driven Product Finder launched",
                desc: "Helping customers find their perfect laptop in seconds.",
              },
            ].map((item, i) => (
              <div key={i} className="mb-10 ml-6">
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                <h3 className="text-lg font-bold text-cyan-300">{item.year}</h3>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { icon: <Users size={28} />, label: "Happy Customers", value: "1,20,000+" },
            { icon: <Laptop size={28} />, label: "Laptops Sold", value: "90,000+" },
            { icon: <Globe size={28} />, label: "Cities Served", value: "350+" },
            { icon: <Trophy size={28} />, label: "Awards Won", value: "7+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-800/40 border border-slate-700 rounded-2xl py-6"
            >
              <div className="text-cyan-400 flex justify-center mb-2">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck size={26} className="text-green-400" />,
                title: "Trust & Transparency",
                desc: "We ensure authentic products and transparent pricing at all times.",
              },
              {
                icon: <Heart size={26} className="text-rose-400" />,
                title: "Customer First",
                desc: "Your satisfaction is our priority — from selection to delivery.",
              },
              {
                icon: <Rocket size={26} className="text-cyan-400" />,
                title: "Innovation Driven",
                desc: "We bring future-ready solutions like AI product recommendations.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition"
              >
                <div className="flex justify-center mb-3">{val.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{val.title}</h3>
                <p className="text-slate-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-slate-800/50 border border-slate-700 rounded-2xl py-10 px-4 mt-10"
        >
          <h3 className="text-xl font-semibold mb-2">
            Want to partner or collaborate?
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            We love working with brands, creators, and communities to bring tech closer to everyone.
          </p>
          <a
            href="mailto:business@laptopiya.com"
            className="inline-flex items-center gap-2 bg-cyan-600 px-5 py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            <Mail size={18} /> business@laptopiya.com
          </a>
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
