import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { darkmodeContext } from "../Context/DarkModeContext";
import { CartContext } from "../Context/cartContext";
import { ShoppingCart, Truck, ArrowRight, Zap } from "lucide-react";

const ProductCard = ({ product, onProductClick }) => {
  const { dark } = useContext(darkmodeContext);
  const { addToCart } = useContext(CartContext);

  const cartFN = (product) => {
    addToCart({
      brand: product.brand,
      productName: product.name,
      productImage: product.images[0],
      oldPrice: product.oldPrice,
      currentPrice: product.price,
      _id: product._id,
      discount: product.discount,
      quantity: 1,
      category: product.prodCategory,
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      onClick={() => onProductClick(product.id)}
      className={`relative max-w-xs mb-10 cursor-pointer rounded-2xl overflow-hidden 
        transition-all duration-500 border backdrop-blur-md shadow-xl group
        ${
          dark
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-slate-700"
            : "bg-gradient-to-br from-white via-gray-50 to-slate-100 text-gray-800 border-gray-200"
        }`}
    >
      {/* Gradient shine border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-cyan-500/20 via-blue-400/20 to-purple-500/20 blur-xl" />

      {/* Discount Tag */}
      <span className="absolute z-20 top-3 left-3 bg-gradient-to-r from-red-500 to-red-700 px-3 py-1 text-xs font-semibold text-white rounded-full shadow-lg">
        {product.discount} OFF
      </span>

      {/* Product Image */}
      <motion.div
        className="relative overflow-hidden rounded-t-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-56 object-contain bg-white/5 p-4"
        />
      </motion.div>

      {/* Product Info */}
      <div className="relative p-5 z-10">
        <h3 className="inline-block text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-lg shadow-sm">
          {product.brand}
        </h3>

        <h2
          className={`mt-3 text-base md:text-lg font-bold truncate ${
            dark ? "text-white" : "text-gray-800"
          }`}
        >
          {product.name}
        </h2>

        <div className="flex items-center mt-2 text-yellow-400 text-sm font-semibold">
          ⭐ {product.ratings.average} ({product.ratings.total})
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl font-extrabold text-green-500">
            ₹{product.price}
          </span>
          <span className="text-lg line-through text-gray-400">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Shipping Info */}
        <div className="flex justify-start gap-4 mt-3">
          <div className="flex items-center text-green-500 gap-1">
            <Truck size={18} />
            <span className="text-xs font-semibold">Free Delivery</span>
          </div>
          <div className="flex items-center text-blue-500 gap-1">
            <Zap size={18} />
            <span className="text-xs font-semibold">Fast Shipping</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2.5 items-center mt-5">
          {/* Add to Cart */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              cartFN(product);
            }}
            className="relative flex items-center justify-center gap-2 w-[80%] py-3 rounded-lg 
              bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-md overflow-hidden"
          >
            <ShoppingCart size={22} />
            Add To Cart
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-[shine_2s_linear_infinite]" />
          </motion.button>

          {/* View / Go */}
          <motion.div
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border-2 border-gray-400 p-2 rounded-lg hover:border-cyan-400"
          >
            <ArrowRight className="text-gray-400 group-hover:text-cyan-400" size={20} />
          </motion.div>
        </div>
      </div>

      {/* Shine Animation */}
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

export default ProductCard;
