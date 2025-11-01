import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product, isCenter }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 3 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className={`relative flex flex-col cursor-pointer items-center justify-center p-6 rounded-2xl 
        transition-all duration-700 ${
          isCenter
            ? "scale-110 z-20 shadow-[0_0_35px_rgba(0,255,255,0.4)]"
            : "scale-90 opacity-60"
        }`}
    >
      {/* Shine sweep for center card */}
      {isCenter && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2.5s_linear_infinite] rounded-2xl" />
      )}

      <h3
        className={`text-center mb-3 font-semibold transition-all ${
          isCenter
            ? "text-lg md:text-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg"
            : "text-sm md:text-base text-gray-700"
        }`}
      >
        {product.name.length > 30
          ? product.name.slice(0, 30) + "..."
          : product.name}
      </h3>

      <motion.div
        className={`relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br 
          from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl`}
      >
        {/* Image glow aura */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 
            bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-purple-500/40 blur-2xl`}
        />
        <img
          src={product.images[0]}
          alt={product.name}
          className={`z-10 max-w-full max-h-full object-contain transition-transform duration-700 ${
            isCenter ? "scale-110" : "scale-90 grayscale-[20%]"
          }`}
        />
      </motion.div>

      <div className="flex flex-col items-center mt-3">
        <span
          className={`font-bold transition-all ${
            isCenter
              ? "text-2xl text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
              : "text-lg text-gray-700"
          }`}
        >
          ₹{product.price}
        </span>
        <span
          className={`line-through text-sm ${
            isCenter ? "text-gray-400" : "text-gray-300"
          }`}
        >
          ₹{product.oldPrice}
        </span>
      </div>

      {/* Keyframes for shine */}
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

const FeatureProdSlider = ({ products }) => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    dots: false,
    slidesToShow: 3,
    speed: 700,
    centerPadding: "0px",
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    beforeChange: (_, newIndex) => setCenterIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative py-16 px-4 md:px-10 bg-gradient-to-b from-gray-100 via-white to-gray-100 rounded-3xl overflow-hidden">
      {/* Subtle moving glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 blur-3xl animate-pulse" />

      <div className="relative z-10">
        <div className="flex justify-center items-center gap-2 mb-10">
          <Sparkles className="text-cyan-400 animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Featured Products
          </h2>
          <Sparkles className="text-purple-400 animate-pulse" size={28} />
        </div>

        <Slider {...settings}>
          {products?.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isCenter={index === centerIndex}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureProdSlider;
