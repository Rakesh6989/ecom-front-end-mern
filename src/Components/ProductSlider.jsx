import Slider from "react-slick";
import ProductSliderItem from "./ProductSliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container-box  py-10">
      <Slider {...settings}>
        {products.map((product) => (
          <ProductSliderItem key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
