// src/components/Toast.jsx
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({
  message = "This is a toast message",
  type = "success", // success | error | info | warning
  duration = 3000,
  onClose,
}) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          onClose?.();
          return 0;
        }
        return prev - 100 / (duration / 100);
      });
    }, 100);

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  const colors = {
    success: "bg-green-500 border-green-600",
    error: "bg-red-500 border-red-600",
    info: "bg-blue-500 border-blue-600",
    warning: "bg-yellow-500 border-yellow-600",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-5 right-5 w-80 shadow-lg text-white rounded-xl overflow-hidden border-l-4 ${colors[type]} z-50`}
      >
        <div className="p-4 flex items-center justify-between">
          <p className="font-medium text-sm">{message}</p>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition"
          >
            <X size={16} />
          </button>
        </div>
        <div
          className="absolute bottom-0 left-0 h-1 bg-white/70"
          style={{ width: `${progress}%` }}
        ></div>
      </motion.div>
    </AnimatePresence>
  );
}
