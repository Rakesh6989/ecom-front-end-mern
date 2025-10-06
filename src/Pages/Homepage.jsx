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
import { Laptop } from "lucide-react";
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
    <div className="pt-[150px]">
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
        {/* <div className="bg-blue-100  text-black  px-4 md:px-8 lg:px-16">
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
        </div> */}

        <div className="my-12 container-box ">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Select Top Brands
          </h2>

          <div className="flex flex-wrap justify-between items-center gap-6">
            <div
              onClick={() => handleTabClick("all")}
              className={`cursor-pointer flex flex-col items-center gap-2 h-[110px] w-[100px] rounded-lg border-2 transition-all duration-300 
            ${
              activeTab === "all"
                ? "border-gray-800 bg-blue-300"
                : "border-transparent hover:border-gray-800"
            }`}
            >
              <div className="flex items-center justify-center w-full h-[60px]">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/05/notebook-154358_1280.png"
                  className={`${
                    activeTab === "all" ? "text-red-600" : "border-gray-800"
                  } w-10 h-10`}
                />
              </div>
              <p
                className={`text-sm font-semibold ${
                  activeTab === "all" ? "text-white" : "text-gray-700"
                }`}
              >
                All
              </p>
            </div>

            {brands.map((val, ind) => (
              <div
                key={ind}
                onClick={() => handleTabClick(val.name)}
                className={`cursor-pointer flex flex-col items-center gap-2 h-[110px] w-[100px] rounded-lg border-2 transition-all duration-300
              ${
                activeTab === val.name
                  ? "border-gray-800 bg-blue-50"
                  : "border-transparent hover:border-gray-600"
              }`}
              >
                <div className="flex items-center justify-center w-full h-[60px]">
                  <img
                    src={val.logo}
                    alt={val.name}
                    className="max-w-[70px] max-h-[50px] object-contain"
                  />
                </div>
                <p
                  className={`text-sm font-semibold flex  ${
                    activeTab === val.name
                      ? "text-white bg-red-700 px-3 py-0.5 rounded-xl"
                      : "text-gray-700"
                  }`}
                >
                  {val.name}
                </p>
              </div>
            ))}
          </div>
        </div>

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
  );
}

export default HomePage;
