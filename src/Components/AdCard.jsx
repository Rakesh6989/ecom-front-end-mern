const AdCard = ({ product, onClick }) => {
  return (
    <>
      <div
        className="bg-blue-200  my-10 ml-3 rounded-xl shadow-lg p-6 max-w-[400px] border h-[430px] md:h-[240px]  mx-auto "
        onClick={onClick}
      >
        <div className="flex flex-col xl:flex-row items-center   justify-between">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 w-full md:w-1/2 flex justify-center">
            <div className="relative max-w-[200px] ">
              <img
                src={product.images[0]}
                alt="Bath Soap 3-Pack - Magic Soap for Body Tan Removal"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 pt-2">
              {product.brand}
            </h2>

            <p className="text-lg font-semibold text-gray-400 pb-2 ">
              {"Min. " + product.discount + " off"}
            </p>

            <button
              onClick={() => console.log("Shop Now clicked")}
              className="w-full sm:w-auto px-5 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg transition duration-300 transform hover:scale-102 cursor-pointer shadow-md mt-5"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdCard;
