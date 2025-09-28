import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkmodeContext } from "../Context/DarkModeContext";
import { ShoppingCart, Truck, ArrowRight, Zap } from "lucide-react";
function ProductCard({ product, onProductClick }) {
  const { dark } = useContext(darkmodeContext);
  return (
    <div
      className={`max-w-xs mb-10 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:scale-102 border border-[#c0bbbbde] transition-transform duration-200 p-5 ${
        dark ? "bg-black text-white" : "bg-blue-300 text-black"
      }  `}
      onClick={() => onProductClick(product.id)}
    >
      <div className="relative">
        <span className="text-xs absolute  bg-red-500 px-3 py-1 rounded-xl  top-2 left-2 font-semibold text-white">
          {product.discount} OFF
        </span>

        <img
          className="w-full h-48 object-cover"
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm text-blue-500 font-bold inline px-3  rounded-xl py-0.5 bg-blue-100">
          {product.brand}
        </h3>
        <h2 className="text-lg font-bold text-gray-800 truncate mt-2">
          {product.name}
        </h2>

        <div className="flex items-center mt-2 text-yellow-500 text-sm font-semibold">
          ⭐ {product.ratings.average} ({product.ratings.total})
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl font-extrabold text-green-600">
            ₹{product.price}
          </span>
          <span className="text-lg line-through text-gray-400">
            ₹{product.oldPrice}
          </span>
        </div>
        <div className="flex justify-start gap-4 mt-4">
          <div className="flex text-green-700 items-center">
            <Truck size={20} />
            <span className="text-xs font-semibold">Free Delivery</span>
          </div>

          <div className="flex text-blue-500 items-center">
            <Zap size={20} />
            <span className="text-xs ">Fast Shipping</span>
          </div>
        </div>
        <div className="flex gap-2.5 items-center mt-5">
          <button
            className="  btn-prismary text-white text-center py-3 px-4  w-[80%]
            rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-red-700 transition flex  justify-center gap-2 "
          >
            <ShoppingCart size={22} />
            <span className="font-semibold"> Add To Cart</span>
          </button>
          <button className="border-2 p-2 rounded-lg border-[#62606095]">
            <ArrowRight style={{ color: "gray" }} size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
