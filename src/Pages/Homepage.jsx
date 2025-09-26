import { useContext, useEffect, useState } from "react";
import axios from "axios";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { darkmodeContext } from "../Context/DarkModeContext";
import ProductCard from "../Components/ProductCard";
import ProductSlider from "../Components/ProductSlider";
import FeatureProdSlider from "../Components/FeatureProdSlider";
import { CardData, carddatatwo } from "../UsefulContents/CardDatas";

import FeaturesSection from "../Components/FeatureCard";
function HomePage() {
  const { dark } = useContext(darkmodeContext);
  const [data, setdata] = useState([]);
  const [trendingproducts, settrendingproducts] = useState([]);
  const [featuredata, setfeaturedata] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [limit, setlimit] = useState(20);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5000/products/render?limit=${limit}`)
      .then((res) => setdata(res.data))
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setloading(false);
      });
  }, [limit]);
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
    switch (tabName) {
      case "all":
        // Logic for 'All' tab
        console.log("Displaying all products");
        break;
      case "headphones":
        // Logic for 'Headphones' tab
        console.log("Displaying headphones");
        break;
      case "earbuds":
        // Logic for 'Earbuds' tab
        console.log("Displaying earbuds");
        break;
      case "earphones":
        // Logic for 'Earphones' tab
        console.log("Displaying earphones");
        break;
      case "neckbands":
        // Logic for 'Neckbands' tab
        console.log("Displaying neckbands");
        break;
      default:
        console.log("Unknown tab selected");
    }
  };
  const getTabClasses = (tabName) => {
    return `
      cursor-pointer
      transition-colors
      duration-300
      ${
        activeTab === tabName
          ? "bg-red-600 text-white rounded-md"
          : "text-gray-400 hover:text-white"
      }
      px-4 py-2
      sm:px-6 sm:py-3
      text-sm sm:text-base
      font-semibold
    `;
  };

  return (
    <div className="mt-12">
      <h1 className="text-center pb-10 font-bold text-3xl">
        Latest Laptops | Up to 50% off | Shop now
      </h1>
      <div className="my-20">
        <ProductSlider products={trendingproducts} />
      </div>
      <div className="my-20">
        <FeatureProdSlider products={featuredata} />
      </div>
      <div className="container-box">
        <div className="bg-blue-100  text-white py-15 px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Top Products
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
            <button
              className={getTabClasses("all")}
              onClick={() => handleTabClick("all")}
            >
              All
            </button>
            <button
              className={getTabClasses("headphones")}
              onClick={() => handleTabClick("headphones")}
            >
              Headphones
            </button>
            <button
              className={getTabClasses("earbuds")}
              onClick={() => handleTabClick("earbuds")}
            >
              Earbuds
            </button>
            <button
              className={getTabClasses("earphones")}
              onClick={() => handleTabClick("earphones")}
            >
              Earphones
            </button>
            <button
              className={getTabClasses("neckbands")}
              onClick={() => handleTabClick("neckbands")}
            >
              Neckbands
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
                <ProductCard key={product.id} product={product} />
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
        <p className="text-center font-bold text-3xl pb-10">Why Choose Us</p>
        <FeaturesSection featuredata={carddatatwo} />
      </div>

      <FeaturesSection featuredata={CardData} />
    </div>
  );
}

export default HomePage;
