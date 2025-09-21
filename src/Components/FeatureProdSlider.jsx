import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product, isCenter }) => {
  return (
    <div
      className={`flex flex-col cursor-pointer items-center justify-center p-4 transition-transform duration-500 ${
        isCenter ? "scale-110 p-1 z-10" : "scale-90 opacity-70"
      }`}
    >
      <h3 className="text-center text-black mb-2 font-semibold text-sm md:text-base">
        {product.name.length > 30
          ? product.name.slice(0, 30) + "..."
          : product.name}
      </h3>

      <div className="flex shadow-xl items-center justify-center w-48 h-48 md:w-64 md:h-64 bg-white rounded-lg overflow-hidden mb-2">
        <img
          src={product.images[1]}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-black">₹{product.price}</span>
        <span className="text-sm text-gray-400 line-through">
          ₹{product.oldPrice}
        </span>
      </div>
    </div>
  );
};

const FeatureProdSlider = ({ products }) => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    infinite: true,
    centerMode: true,
    dots: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: "0px",
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    ltr: true,

    autoplaySpeed: 1500,
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
    <div className="container-box">
      <h2 className="text-2xl md:text-3xl text-center text-black font-bold mb-8">
        Featured Products
      </h2>
      <Slider {...settings}>
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isCenter={index === centerIndex}
            />
          ))}
      </Slider>
    </div>
  );
};

export default FeatureProdSlider;
