import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Mail,
  MessageCircle,
  ShieldCheck,
  Truck,
  Award,
  ChevronDown,
} from "lucide-react";

const faqList = [
  {
    q: "Do you provide laptop warranties?",
    a: "Yes, all laptops come with official manufacturer warranties, and you can buy extra Laptopiya Care coverage.",
  },
  {
    q: "What are Laptopiya’s payment options?",
    a: "You can pay via UPI, credit/debit card, EMI, or cash on delivery (available in most locations).",
  },
  {
    q: "How long does shipping take?",
    a: "We ship within 24 hours, with 2–4 day delivery in metros and 5–7 days in other regions.",
  },
  {
    q: "Can I return my laptop?",
    a: "Yes, you can request returns or replacements within 7 days of delivery if the product is defective or not as described.",
  },
  {
    q: "Do you sell refurbished laptops?",
    a: "Yes, we sell certified refurbished laptops that pass a 40-point quality check with up to 1-year Laptopiya warranty.",
  },
];

export default function LaptopiyaHelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqList.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-[8rem] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Laptopiya Help Center 💻
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Find quick answers, or contact our support team instantly.
        </p>
      </motion.div>

      {/* Search bar */}
      <div className="w-full max-w-3xl mb-10 relative">
        <Search className="absolute left-4 top-3 text-gray-400" size={20} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your question..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-700 focus:ring-2 focus:ring-cyan-400 outline-none text-sm"
        />
      </div>

      {/* FAQ accordion */}
      <div className="w-full max-w-3xl space-y-4">
        <AnimatePresence>
          {filteredFaqs.map((faq, i) => (
            <motion.div
              key={i}
              layout
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
              >
                <span className="font-semibold text-base md:text-lg text-cyan-300">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === i
                      ? "rotate-180 text-cyan-400"
                      : "text-gray-400"
                  }`}
                  size={22}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-300 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-400 py-8">
              No FAQs found for “{search}” 😕
            </p>
          )}
        </AnimatePresence>
      </div>

      {/* Trust Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 text-center"
        >
          <ShieldCheck className="mx-auto text-cyan-400 mb-2" size={38} />
          <h4 className="font-semibold text-lg">Laptopiya Warranty</h4>
          <p className="text-gray-400 text-sm">
            Every laptop is 100% genuine & covered by manufacturer warranty.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 text-center"
        >
          <Truck className="mx-auto text-blue-400 mb-2" size={38} />
          <h4 className="font-semibold text-lg">Fast Shipping</h4>
          <p className="text-gray-400 text-sm">
            We deliver laptops to 20,000+ pin codes in India with speed & care.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 text-center"
        >
          <Award className="mx-auto text-purple-400 mb-2" size={38} />
          <h4 className="font-semibold text-lg">Quality Assured</h4>
          <p className="text-gray-400 text-sm">
            All products undergo multi-layer testing before dispatch.
          </p>
        </motion.div>
      </div>

      {/* Quick Support Panel */}
      <div className="w-full max-w-3xl mt-16 bg-slate-800/60 border border-slate-700 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400">
            Need More Help?
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Chat with us anytime — our Laptopiya Support is active 24/7!
          </p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="mailto:support@laptopiya.com"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg transition shadow-lg"
          >
            <Mail size={18} /> Mail Us
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg transition shadow-lg"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold">Laptopiya</span> — Smart.
        Fast. Reliable.
      </footer>
    </div>
  );
}
