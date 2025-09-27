import { Heart, Star } from "lucide-react";

const SimilarProdCard = ({ product, onProductClick }) => {
  if (!product) return null;

  const formatPrice = (price) => `₹${price}`;

  return (
    <div
      onClick={() => onProductClick(product.id)}
      className="bg-white rounded-lg my-6 w-full shadow-md hover:shadow-xl transition duration-300 overflow-hidden max-w-sm cursor-pointer"
    >
      {/* Image + Wishlist Button */}
      <div className="relative p-4 pb-2">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
          onClick={(e) => {
            e.stopPropagation(); // so click on heart doesn't trigger card click
            console.log("Wishlist clicked", product.id);
          }}
        >
          <Heart size={24} />
        </button>

        <div className="flex justify-center items-center h-48 sm:h-64">
          <img
            src={
              product.images?.[0] ||
              "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"
            }
            alt={product.name}
            className="max-h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 pt-2">
        <p className="text-sm text-gray-500 mb-1">Similar products</p>

        <h3 className="text-base font-semibold text-gray-800 line-clamp-3 mb-2">
          {product.name}
        </h3>

        {/* Ratings */}
        {product.ratings && (
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded">
              {product.ratings.average}
              <Star size={12} className="ml-1 fill-white" />
            </div>
            <span className="text-gray-600 text-sm">
              ({product.ratings.total})
            </span>
          </div>
        )}

        {/* Price + Discount */}
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}

          {product.discount && (
            <span className="text-sm font-semibold text-green-700">
              {product.discount}
            </span>
          )}
        </div>

        <p className="text-xs text-gray-400">Sponsored</p>
      </div>
    </div>
  );
};

export default SimilarProdCard;
