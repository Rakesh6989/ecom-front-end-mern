import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "lucide-react";
import AdCardSlider from "./AdCardSlider";
import SimilarProdSlider from "./SimilarProdSlider";
function ProductRender() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState({
    mainproduct: true,
    optproduct: true,
  });
  const [selectedImage, setSelectedImage] = useState(0);
  const [expand, setexpand] = useState(false);
  const [optionaldata, setoptionaldata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading((prev) => ({
          ...prev,
          mainproduct: false,
        }));
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchOptdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/render?limit=${4}`
        );
        setoptionaldata(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading((prev) => ({
          ...prev,
          optproduct: false,
        }));
      }
    };
    fetchOptdata();
  }, []);
  console.log(optionaldata);
  const maxlength = 300;
  const islong = product && product.description?.length > maxlength;
  const preview = product && product.description?.slice(0, maxlength);
  if (loading.mainproduct)
    return (
      <div className="min-h-screen text-center">Loading Product Details..</div>
    );
  if (!product) return <p>No Product Details Found</p>;
  const handlenext = (id) => {
    window.open(`/products/${id}`, "C");
  };
  return (
    <div className="  container-box">
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <div className="flex  gap-8">
          <div className="flex flex-col gap-2 mt-2">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`w-20 h-20 object-contain border cursor-pointer ${
                  selectedImage === idx ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-96 h-96 object-contain border p-2"
            />

            <div className="flex  justify-between w-full gap-4 mt-4">
              <button className="px-6 cursor-pointer py-2 w-full bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                Add to Cart
              </button>
              <button className="px-6 cursor-pointer py-2 w-full bg-red-600 text-white rounded hover:bg-red-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 ">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>
            <p className="text-gray-500 font-medium text-sm sm:text-base mt-1">
              {product.brand}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <span className="text-2xl sm:text-3xl font-bold text-green-700">
              ₹{product.price}
            </span>
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-sm sm:text-base">
                ₹{product.oldPrice}
              </span>
            )}
            {product.discount && (
              <span className="text-red-600 font-semibold text-sm sm:text-base">
                {product.discount} off
              </span>
            )}
          </div>

          {product.ratings && (
            <div className="flex items-center gap-2 text-yellow-500 font-semibold mt-2">
              ⭐ {product.ratings.average} ({product.ratings.total} ratings)
            </div>
          )}

          {product.offers?.length > 0 && (
            <div className="mt-4 bg-blue-200 cursor-pointer p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-red-600">
                Available Offers:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm font-semibold text-gray-700">
                {product.offers.map((offer, idx) => (
                  <li key={idx}>{offer}</li>
                ))}
              </ul>
            </div>
          )}

          {product.description && (
            <div className="mt-5">
              <h3 className="font-semibold text-xl text-gray-900">
                Description
              </h3>
              <p className="text-gray-700 text-lg  whitespace-pre-line leading-relaxed">
                {expand ? product.description : preview}
              </p>

              {islong && (
                <button
                  className="text-sm text-[#fff] rounded-xl font-semibold bg-red-600 px-3  py-2 mt-2 cursor-pointer"
                  onClick={() => setexpand(!expand)}
                >
                  {expand ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          )}

          {product.specifications && (
            <div className="mt-6 overflow-x-auto">
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Specifications
              </h3>
              <div className="rounded-xl border">
                <table className="min-w-full a cursor-pointer">
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, value], ind, arr) => (
                        <tr
                          key={key}
                          className={`hover:bg-blue-200  ${
                            ind !== arr.length - 1 ? "border-b" : ""
                          } `}
                        >
                          <td className="px-4 py-2 capitalize font-semibold text-gray-700 border-r ">
                            {key}
                          </td>
                          <td className="px-4 py-2 text-gray-800">{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {product.testimonials?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-4 text-gray-900">
                Customer Reviews
              </h3>
              <ul className="space-y-4">
                {product.testimonials.map((t) => (
                  <li
                    key={t._id}
                    className="border p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-md transition-shadow duration-200 bg-blue-200 "
                  >
                    <div className="flex  items-center gap-2">
                      <User className="text-gray-800 bg-blue-300 h-10 w-10 p-2 rounded-[50%]" />

                      <p className="font-semibold text-lg text-gray-900">
                        {t.user}
                      </p>
                    </div>
                    <p className="text-gray-700 mt-1 italic">{t.comment}</p>

                    {Array.from({ length: t.rating }).map((_, ind) => (
                      <span key={ind} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="text-xl font-bold text-gray-800">You might be interested</p>
      <AdCardSlider products={optionaldata} />
      <p className="text-xl font-bold text-gray-800">Similar Products</p>
      <SimilarProdSlider products={optionaldata} onProductClick={handlenext} />
    </div>
  );
}

export default ProductRender;
