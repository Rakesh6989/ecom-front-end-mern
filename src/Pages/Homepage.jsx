import { useContext, useEffect, useState } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import axios from "axios";
import { darkmodeContext } from "../Context/DarkModeContext";
import ProductCard from "../Components/ProductCard";
import ProductSlider from "../Components/ProductSlider";
import FeatureProdSlider from "../Components/FeatureProdSlider";
function HomePage() {
  const { dark } = useContext(darkmodeContext);
  const [data, setdata] = useState([]);
  const [trendingproducts, settrendingproducts] = useState([]);
  const [featuredata, setfeaturedata] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

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
  console.log("f", featuredata);
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
        <div
          className={`${
            dark ? "bg-black text-white" : "bg-blue-100 text-black"
          } flex flex-wrap justify-between flex-col md:flex-row  items-center md:items-normal  gap-5 my-20`}
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
      <div className="container-box">
        <div className="  text-white py-12 px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Our Advantages
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Express Delivery */}
            <div className="flex flex-col items-center text-center">
              <LocalShippingOutlinedIcon
                sx={{ color: "#dc2626", fontSize: 40 }}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">Express Delivery</h3>
              <p className="text-gray-400 text-sm">Ships in 24 Hours</p>
            </div>

            {/* Brand Warranty */}
            <div className="flex flex-col items-center text-center">
              <SecurityOutlinedIcon
                sx={{ color: "#dc2626", fontSize: 40 }}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">Brand Warranty</h3>
              <p className="text-gray-400 text-sm">100% Original products</p>
            </div>

            {/* Exciting Deals */}
            <div className="flex flex-col items-center text-center">
              <LocalOfferOutlinedIcon
                sx={{ color: "#dc2626", fontSize: 40 }}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">Exciting Deals</h3>
              <p className="text-gray-400 text-sm">On all prepaid orders</p>
            </div>

            {/* Secure Payments */}
            <div className="flex flex-col items-center text-center">
              <CreditCardOutlinedIcon
                sx={{ color: "#dc2626", fontSize: 40 }}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">Secure Payments</h3>
              <p className="text-gray-400 text-sm">SSL / Secure certificate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
