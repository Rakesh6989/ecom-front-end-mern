import { useState, useEffect } from "react";
import axios from "axios";
import ProductSlider from "../Components/ProductSlider";
function SliderPage() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/trending-products")
      .then((resp) => setproducts(resp.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(products);
  return (
    <>
      <ProductSlider products={products} />
    </>
  );
}

export default SliderPage;
