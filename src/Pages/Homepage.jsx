import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { darkmodeContext } from "../Context/DarkModeContext";
import ProductCard from "../Components/ProductCard";
import ProductSlider from "../Components/ProductSlider";
function HomePage() {
  const [data, setdata] = useState([]);
  const [trendingproducts, settrendingproducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/render")
      .then((res) => setdata(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/trending-products")
      .then((resp) => settrendingproducts(resp.data))
      .catch((e) => console.log(e));
  }, []);
  const { dark } = useContext(darkmodeContext);
  console.log("dark", dark);
  console.log(data);
  return (
    <div className="mt-12">
      <h1 className="text-center pb-10 font-bold text-3xl">
        Latest Laptops | Up to 50% off | Shop now
      </h1>
      <div className="mb-20">
        <ProductSlider products={trendingproducts} />
      </div>
      <div
        className={`${
          dark ? "bg-black text-white" : "bg-white text-black"
        } flex flex-wrap justify-between flex-col md:flex-row  items-center md:items-normal  gap-5  container-box`}
      >
        {data && data.length > 0 ? (
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="min-h-screen  mx-auto">No products found</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
