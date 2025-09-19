import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkmodeContext } from "../Context/DarkModeContext";
function ProductCard({ product }) {
  const { dark } = useContext(darkmodeContext);
  return (
    <div
      className={`max-w-xs mb-10 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:scale-102 border border-[#c0bbbbde] transition-transform duration-200 p-5 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }  `}
    >
      <img
        className="w-full h-48 object-cover"
        src={product.images[0]}
        alt={product.name}
      />
      <div className="p-4">
        <h3 className="text-sm text-gray-500 font-semibold">{product.brand}</h3>
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {product.name}
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl font-bold text-green-600">
            ₹{product.price}
          </span>
          <span className="text-sm line-through text-gray-400">
            ₹{product.oldPrice}
          </span>
          <span className="text-sm font-semibold text-red-500">
            {product.discount} off
          </span>
        </div>
        <div className="flex items-center mt-2 text-yellow-500 text-sm">
          ⭐ {product.ratings.average} ({product.ratings.total})
        </div>
        <Link
          to={`/product/${product.id}`}
          className="block mt-4 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
