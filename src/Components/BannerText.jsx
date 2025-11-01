import { Sparkles, Laptop } from "lucide-react";
import { motion } from "framer-motion";

export default function BannerText({ text }) {
  return (
    <div className="py-15">
     

      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="flex justify-center items-center gap-3"
      >
        <Laptop className="w-10 h-10 text-cyan-400 drop-shadow-lg" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-extrabold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]"
        >
          {text}
        </motion.h1>
        <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse drop-shadow" />
      </motion.div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
