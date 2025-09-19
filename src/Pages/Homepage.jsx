import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { darkmodeContext } from "../Context/DarkModeContext";
import ProductCard from "../Components/ProductCard";
function HomePage() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/render")
      .then((res) => setdata(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const { dark } = useContext(darkmodeContext);
  console.log("dark", dark);
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://cdn.pixabay.com/photo/2016/10/13/16/26/web-agency-1738168_1280.jpg",
      description:
        "High-quality wireless headphones with noise-cancellation and long battery life.",
      price: 2999,
      rating: 4.5,
      stock: 12,
    },
    {
      id: 2,
      name: "Smart Watch",
      image:
        "https://cdn.pixabay.com/photo/2023/10/10/05/52/website-8305451_1280.jpg",
      description:
        "Stylish smartwatch with fitness tracking, heart rate monitor, and notifications.",
      price: 4999,
      rating: 4.2,
      stock: 20,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      image:
        "https://cdn.pixabay.com/photo/2015/09/18/22/03/speaker-941121_1280.jpg",
      description:
        "Portable Bluetooth speaker with deep bass and waterproof design for outdoor use.",
      price: 1999,
      rating: 4.6,
      stock: 15,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      image:
        "https://cdn.pixabay.com/photo/2017/06/01/12/38/mouse-2364126_1280.jpg",
      description:
        "Ergonomic gaming mouse with customizable DPI and RGB lighting effects.",
      price: 1499,
      rating: 4.4,
      stock: 30,
    },
    {
      id: 5,
      name: "Laptop Backpack",
      image:
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/backpack-2555165_1280.jpg",
      description:
        "Durable and spacious backpack with laptop compartment and multiple pockets.",
      price: 2499,
      rating: 4.3,
      stock: 25,
    },
  ];
  console.log(data);
  return (
    <div className="mt-15">
      <h1 className="text-center pb-10 font-bold text-3xl">Latest Laptops | Up to 50% off | Shop now</h1>

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
