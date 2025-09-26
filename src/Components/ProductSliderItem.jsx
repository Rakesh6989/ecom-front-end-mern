
const ProductSliderItem = ({ product,onClick  }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-6 rounded-lg shadow-lg" onClick={onClick }>
      <div className="md:w-1/2 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-bold">{product.name}</h2>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">₹{product.price}</span>
          <span className="line-through text-gray-400">₹{product.oldPrice}</span>
          <span className="text-green-400 font-semibold">{product.discount}</span>
        </div>
        <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded w-32">
          Shop Now
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="max-w-xs md:max-w-md object-contain h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductSliderItem;
