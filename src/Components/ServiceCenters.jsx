import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Wrench, Search } from "lucide-react";

export default function ServiceCenters() {
  const [search, setSearch] = useState("");

  const centers = [
    {
      city: "Bangalore",
      address: "12, MG Road, Near Metro Station, Bangalore - 560001",
      phone: "+91 98765 12345",
      timings: "Mon - Sat: 9AM - 7PM",
      brand: "Dell",
    },
    {
      city: "Mumbai",
      address: "A-22, Andheri West, Mumbai - 400058",
      phone: "+91 88765 23456",
      timings: "Mon - Sat: 10AM - 6PM",
      brand: "HP",
    },
    {
      city: "Delhi",
      address: "G-12, Connaught Place, Delhi - 110001",
      phone: "+91 77777 99999",
      timings: "Mon - Sun: 10AM - 8PM",
      brand: "Lenovo",
    },
    {
      city: "Hyderabad",
      address: "Plot No 45, Banjara Hills, Hyderabad - 500034",
      phone: "+91 99876 54321",
      timings: "Mon - Sat: 9AM - 7PM",
      brand: "Asus",
    },
  ];

  const filteredCenters = centers.filter((c) =>
    c.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen  pt-[8rem] bg-gradient-to-br from-[#0A0F1D] via-[#12192A] to-[#0A0F1D] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Laptopiya Service Centers
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Find your nearest authorized Laptopiya partner service center for repairs, diagnostics, and support.  
            Trusted by 1 lakh+ customers nationwide ⚙️
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="flex items-center bg-slate-800/60 border border-slate-700 rounded-full w-full max-w-md px-5 py-3">
            <Search className="text-cyan-400 mr-3" />
            <input
              type="text"
              placeholder="Search city or brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-white w-full placeholder:text-slate-400"
            />
          </div>
        </motion.div>

        {/* Centers Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCenters.length > 0 ? (
            filteredCenters.map((center, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 shadow-lg hover:border-cyan-400 transition"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {center.city}
                  </h3>
                  <span className="text-xs bg-cyan-700 px-3 py-1 rounded-full">
                    {center.brand}
                  </span>
                </div>
                <div className="space-y-3 text-slate-300 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-cyan-400 mt-0.5" />
                    <p>{center.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-cyan-400" />
                    <p>{center.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-cyan-400" />
                    <p>{center.timings}</p>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition">
                    <Wrench size={16} /> Book Service
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-slate-400 col-span-full">
              No service centers found for your search.
            </p>
          )}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg mt-10"
        >
          <iframe
            title="Laptopiya Service Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6874937409983!2d77.59456231530389!3d12.971598790854245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1673f3479e77%3A0xaaa!2sBangalore%20India!5e0!3m2!1sen!2sin!4v1678523553567!5m2!1sen!2sin"
            width="100%"
            height="400"
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
