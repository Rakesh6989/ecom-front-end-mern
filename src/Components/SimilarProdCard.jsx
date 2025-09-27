import React from "react";
import { Heart, Star } from "lucide-react"; // Using lucide-react for icons

const SimilarProdCard = ({
  imageUrl,
  title,
  rating,
  reviewCount,
  currentPrice,
  originalPrice,
  discount,
  isAssured,
}) => {
  const formatPrice = (price) => `₹${price}`;

  return (
    <div className="bg-white rounded-lg my-10 shadow-md hover:shadow-xl transition duration-300 overflow-hidden max-w-sm mx-auto">
      <div className="relative p-4 pb-2">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
          <Heart size={24} fill="currentColor" />
        </button>

        <div className="flex justify-center items-center h-48 sm:h-64">
          <img
            src={
              imageUrl ||
              "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"
            }
            alt={title}
            className="max-h-full w-auto object-contain"
          />
        </div>
      </div>

      <div className="p-4 pt-2">
        <p className="text-sm text-gray-500 mb-1">Similar products</p>

        <h3 className="text-base font-semibold text-gray-800 line-clamp-3 mb-2">
          {title ||
            "PATANJALI Saundarya with Neem, Aloe Vera, Anti Acne & Pimples - ..."}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded">
            {rating || 4.4}
            <Star size={12} className="ml-1 fill-white" />
          </div>

          <span className="text-gray-600 text-sm">
            ({reviewCount || "2,678"})
          </span>

          {isAssured && (
            <span className="text-blue-700 font-bold text-xs border border-blue-700 px-1 py-0.5 rounded-sm">
              Assured
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2 mb-1">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(currentPrice || 315)}
          </span>

          <span className="text-sm text-gray-500 line-through">
            {formatPrice(originalPrice || 420)}
          </span>

          <span className="text-sm font-semibold text-green-700">
            {discount || "25% off"}
          </span>
        </div>

        <p className="text-xs text-gray-400">Sponsored</p>
      </div>
    </div>
  );
};

export default SimilarProdCard;
