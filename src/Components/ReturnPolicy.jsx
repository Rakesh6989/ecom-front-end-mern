import { motion } from "framer-motion";
import { ShieldCheck, RotateCcw, Clock, CreditCard, Mail, MessageCircle } from "lucide-react";

export default function LaptopiyaReturnPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-[8rem] from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
          Laptopiya Return & Refund Policy 🔁
        </h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          We value your satisfaction above everything. If your laptop isn’t perfect — we’ll make it right.  
        </p>
      </motion.div>

      {/* Highlights Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {[
          { icon: <ShieldCheck size={36} className="text-cyan-400" />, title: "100% Genuine Products", desc: "All laptops sold at Laptopiya are verified with official serial & manufacturer warranty." },
          { icon: <RotateCcw size={36} className="text-blue-400" />, title: "7-Day Easy Returns", desc: "If your laptop is damaged, defective or not as described — request return within 7 days." },
          { icon: <Clock size={36} className="text-purple-400" />, title: "Quick Refunds", desc: "Refunds processed within 3–5 working days once your return is approved." },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center shadow-lg"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Step-by-Step Timeline */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-cyan-400 text-center mb-8">
          Return Process – Simple & Transparent
        </h2>

        <div className="space-y-8">
          {[
            { step: "1", title: "Submit Your Request", desc: "Go to your Laptopiya Orders page and click 'Request Return' for the eligible product." },
            { step: "2", title: "Verification & Pickup", desc: "Our team will verify your claim and schedule a free pickup within 48 hours." },
            { step: "3", title: "Quality Check", desc: "Once we receive your laptop, it undergoes a quick inspection (usually 1–2 days)." },
            { step: "4", title: "Refund / Replacement", desc: "After approval, your refund or replacement is processed within 3–5 business days." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-slate-800/40 border border-slate-700 rounded-xl p-5 hover:border-cyan-400 transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 text-black font-bold">
                {s.step}
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300">{s.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Refund Modes Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Refund Methods</h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
          Refunds are processed back to your original payment method within 3–5 working days after approval.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-4 py-2 rounded-xl">
            <CreditCard className="text-cyan-400" size={20} />
            <span className="text-sm text-gray-300">Bank / Card Refund</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-4 py-2 rounded-xl">
            <ShieldCheck className="text-blue-400" size={20} />
            <span className="text-sm text-gray-300">Laptopiya Wallet Credit</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-4 py-2 rounded-xl">
            <RotateCcw className="text-purple-400" size={20} />
            <span className="text-sm text-gray-300">Replacement Device</span>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="max-w-4xl mx-auto bg-slate-800/60 border border-slate-700 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">Need Help with a Return?</h3>
          <p className="text-gray-400 text-sm mt-2">
            Our dedicated return team is available 24/7 to guide you through the process.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:returns@laptopiya.com"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg shadow-lg transition"
          >
            <Mail size={18} /> Mail Us
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg shadow-lg transition"
          >
            <MessageCircle size={18} /> WhatsApp Support
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-16 text-sm">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Laptopiya</span> • Return. Replace. Refund — Seamlessly.
      </footer>
    </div>
  );
}
