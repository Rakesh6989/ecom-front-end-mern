import Slider from "react-slick";
import SimilarProdCard from "./SimilarProdCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarProdSlider = ({ products, onProductClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-box  py-10">
      <Slider {...settings}>
        {products.map((product) => (
          <SimilarProdCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SimilarProdSlider;
