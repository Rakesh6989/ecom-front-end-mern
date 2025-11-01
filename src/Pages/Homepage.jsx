import { useContext, useEffect, useState } from "react";
import { Sparkles, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import TopBrandsSection from "../Components/TopBrandsSection";
import BannerText from "../Components/BannerText";
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
  const [limit, setlimit] = useState(28);
  const [loading, setloading] = useState(false);
  // const [filterdata, setfilterdata] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [data, setdata] = useState([]);

  const brands = [
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/450px-Dell_Logo.svg.png",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png",
    },
    {
      name: "Acer",
      logo: "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo-640x400.png",
    },
    {
      name: "Lenovo",
      logo: "https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Logo-700x394.png",
    },
    {
      name: "ASUS",
      logo: "https://images.seeklogo.com/logo-png/1/1/asus-logo-png_seeklogo-12597.png",
    },
  ];

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
      setdata(allProducts);
    } else {
      const filtered = allProducts.filter((val) => val.brand === tabName);
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
    window.open(`/products/${id}`, "_blank");
  }

  // console.log("activeTab", activeTab);

  return (
    <div className="pt-[10rem]">
      <div className=" container-box">
        <div className="px-[15px] py-0">
          <BannerText text={" Latest Laptops | Up to 50% Off | Shop Now"} />
        </div>
        <div className="my-20">
          <ProductSlider
            products={trendingproducts}
            onProductClick={handleNext}
          />
        </div>
        <div className="my-20">
          <FeatureProdSlider products={featuredata} />
        </div>
        <div className="">
         
            <TopBrandsSection
              brands={brands}
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
      

          <div>
            <div
              className={`${
                dark ? "bg-black text-white" : "bg-[#f1f3f6] text-black"
              } flex flex-wrap justify-between flex-col md:flex-row  items-center md:items-normal  gap-10 mt-20`}
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
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
