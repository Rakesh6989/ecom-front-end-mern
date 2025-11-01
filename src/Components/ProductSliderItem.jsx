import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

const ProductSliderItem = ({ product, onProductClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onClick={onProductClick}
      className="group relative flex flex-col md:flex-row items-center justify-between 
                 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                 text-white p-6 md:p-10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-all duration-700 bg-gradient-to-r from-cyan-500/30 via-blue-400/20 to-purple-500/30 blur-3xl" />

      <div className="relative z-10 md:w-1/2 flex flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-lg"
        >
          {product.name}
        </motion.h2>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-white drop-shadow-md">
            ₹{product.price}
          </span>
          <span className="line-through text-gray-500 text-lg">
            ₹{product.oldPrice}
          </span>
          <span className="text-green-400 font-semibold bg-green-400/10 px-3 py-1 rounded-full text-sm">
            {product.discount}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(product.rating || 4)
                  ? "text-yellow-400"
                  : "text-gray-500"
              }`}
              fill={i < Math.round(product.rating || 4) ? "#facc15" : "none"}
            />
          ))}
          <span className="text-sm text-gray-400 ml-2">
            {product.rating || "4.5"}/5
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-4 w-40 flex items-center justify-center gap-2 px-4 py-2 rounded-xl
                     bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold
                     shadow-lg hover:shadow-cyan-500/40 transition-all"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Shop Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-[shine_2s_linear_infinite]" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative md:w-1/2 flex justify-center mt-6 md:mt-0"
      >
        <motion.img
          src={product.images[0]}
          alt={product.name}
          className="relative z-10 max-w-xs md:max-w-md h-[380px] object-contain drop-shadow-[0_0_25px_rgba(0,255,255,0.3)] group-hover:drop-shadow-[0_0_35px_rgba(0,255,255,0.6)] transition-all duration-700"
        />
        <div className="absolute -inset-6 bg-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full" />
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
    </motion.div>
  );
};

export default ProductSliderItem;
