import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { darkmodeContext } from "../Context/DarkModeContext";
import ProductCard from "../Components/ProductCard";
import ProductSlider from "../Components/ProductSlider";
import FeatureProdSlider from "../Components/FeatureProdSlider";
import { CardData, carddatatwo } from "../UsefulContents/CardDatas";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "../Components/FeatureCard";
import WhyChooseUs from "../Components/WhyChoose";
function HomePage() {
  const { dark } = useContext(darkmodeContext);
  const [trendingproducts, settrendingproducts] = useState([]);
  const [featuredata, setfeaturedata] = useState([]);
  const [limit, setlimit] = useState(20);
  const [loading, setloading] = useState(false);
  const [filterdata, setfilterdata] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [data, setdata] = useState([]);

  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5000/products/render?limit=${limit}`)
      .then((res) => {
        setAllProducts(res.data);

        if (activeTab === "all") {
          setdata(res.data);
        } else {
          setdata(res.data.filter((val) => val.brand === activeTab));
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setloading(false));
  }, [limit]);

  useEffect(() => {
    if (activeTab === "all") {
      setdata(allProducts);
    } else {
      setdata(allProducts.filter((val) => val.brand === activeTab));
    }
  }, [activeTab, allProducts]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/trending-products")
      .then((resp) => settrendingproducts(resp.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/featured-products")
      .then((res) => setfeaturedata(res.data))
      .catch((e) => console.log(e));
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    if (tabName === "all") {
      setdata(filterdata);
    } else {
      const filtered = filterdata.filter((val) => val.brand === tabName);
      setdata(filtered);
    }
  };

  const navigate = useNavigate();
  const getTabClasses = (tabName) => {
    return `
      cursor-pointer
      transition-colors
      duration-300
      ${
        activeTab === tabName
          ? "bg-red-600 text-white rounded-md"
          : "text-gray-400 hover:text-black hover:bg-red-600 rounded-md hover:text-white"
      }
      px-4 py-2
      sm:px-6 sm:py-3
      text-lg
      font-semibold text-gray-800
    `;
  };
  function handleNext(id) {
    console.log("id", id);
    window.open(`/products/${id}`, "_blank");
  }

  // console.log("activeTab", activeTab);

  return (
    <div className="mt-12">
      <h1 className="text-center pb-10 font-bold text-3xl">
        Latest Laptops | Up to 50% off | Shop now
      </h1>
      <div className="my-20">
        <ProductSlider
          products={trendingproducts}
          onProductClick={handleNext}
        />
      </div>
      <div className="my-20">
        <FeatureProdSlider products={featuredata} />
      </div>
      <div className="container-box">
        <div className="bg-blue-100  text-black  px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Top Brands
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
            <button
              className={getTabClasses("all")}
              onClick={() => handleTabClick("all")}
            >
              All
            </button>
            <button
              className={getTabClasses("HP")}
              onClick={() => handleTabClick("HP")}
            >
              HP
            </button>
            <button
              className={getTabClasses("Lenovo")}
              onClick={() => handleTabClick("Lenovo")}
            >
              Lenovo
            </button>
            <button
              className={getTabClasses("Acer")}
              onClick={() => handleTabClick("Acer")}
            >
              Acer
            </button>
            <button
              className={getTabClasses("Apple")}
              onClick={() => handleTabClick("Apple")}
            >
              Apple
            </button>
            <button
              className={getTabClasses("Dell")}
              onClick={() => handleTabClick("Dell")}
            >
              Dell
            </button>
          </div>
        </div>
        <div>
          <div
            className={`${
              dark ? "bg-black text-white" : "bg-blue-100 text-black"
            } flex flex-wrap justify-between flex-col md:flex-row  items-center md:items-normal  gap-5 mt-20`}
          >
            {data && data.length > 0 ? (
              data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleNext}
                />
              ))
            ) : (
              <div className="min-h-screen  mx-auto">No products found</div>
            )}
          </div>
          <button
            className="float-right text-white cursor-pointer  mt-4 text-center py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 transition"
            onClick={() => setlimit((prev) => prev + 8)}
          >
            {loading ? "Loading.." : "See More"}
          </button>
        </div>
      </div>
      <div className="mt-20">
        <WhyChooseUs/>
        <p className="text-center font-bold text-3xl pb-10">Why Choose Us</p>
        <FeaturesSection featuredata={carddatatwo} />
      </div>

      <FeaturesSection featuredata={CardData} />
    </div>
  );
}

export default HomePage;
