import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { User, ShoppingCart, Zap, Package, Star, ChevronDown, ChevronUp, ZoomIn } from "lucide-react";
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
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const maxlength = 300;
  const islong = product && product.description?.length > maxlength;
  const preview = product && product.description?.slice(0, maxlength);

  if (loading.mainproduct)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading Product Details...</p>
        </div>
      </div>
    );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <p className="text-xl font-semibold text-gray-700">No Product Details Found</p>
      </div>
    </div>
  );

  const handlenext = (id) => {
    window.open(`/products/${id}`, "C");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 lg:px-8 py-8 pt-[150px]">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* LEFT SIDE - Image Gallery */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-3">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                      selectedImage === idx
                        ? "ring-2 ring-blue-500 shadow-lg scale-105"
                        : "ring-1 ring-gray-200 hover:ring-gray-300"
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={img}
                      alt={`thumb-${idx}`}
                      className="w-full h-full object-contain p-2 bg-white"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image with Zoom */}
              <div className="flex-1 flex flex-col">
                <div 
                  className="bg-white rounded-2xl shadow-lg p-6 mb-4 relative overflow-hidden cursor-crosshair group"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsZooming(true)}
                  onMouseLeave={() => setIsZooming(false)}
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-96 object-contain"
                  />
                  {/* Zoom Indicator */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                    Hover to zoom
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <Zap className="w-5 h-5" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Specifications - Moved to Left Side Bottom */}
            {product.specifications && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="font-bold text-xl px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  Specifications
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="hover:bg-blue-50 transition-colors">
                          <td className="px-6 py-4 capitalize font-semibold text-gray-700 w-1/3">
                            {key}
                          </td>
                          <td className="px-6 py-4 text-gray-800">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - Product Details & Zoomed Image */}
          <div className="flex flex-col gap-6">
            {/* Zoomed Image Display */}
            {isZooming && (
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden sticky top-24 h-[500px]">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${product.images[selectedImage]})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: '250%',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
            )}

            {/* Title and Brand */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 font-medium text-lg">
                {product.brand}
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-3xl lg:text-4xl font-bold text-green-700">
                  ₹{product.price}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-gray-500 text-xl">
                    ₹{product.oldPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                    {product.discount} OFF
                  </span>
                )}
              </div>
            </div>

            {/* Ratings */}
            {product.ratings && (
              <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 w-fit">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="font-bold text-gray-900">{product.ratings.average}</span>
                <span className="text-gray-600">({product.ratings.total} ratings)</span>
              </div>
            )}

            {/* Offers */}
            {product.offers?.length > 0 && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-blue-900 flex items-center gap-2">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">OFFERS</span>
                  Available Deals
                </h3>
                <ul className="space-y-2">
                  {product.offers.map((offer, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="font-medium">{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.description && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {expand ? product.description : preview}
                </p>
                {islong && (
                  <button
                    className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    onClick={() => setexpand(!expand)}
                  >
                    {expand ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

            {/* Customer Reviews */}
            {product.testimonials?.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-5 text-gray-900">
                  Customer Reviews
                </h3>
                <div className="space-y-4">
                  {product.testimonials.map((t) => (
                    <div
                      key={t._id}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-500 text-white rounded-full p-2">
                          <User className="w-5 h-5" />
                        </div>
                        <p className="font-semibold text-lg text-gray-900">{t.user}</p>
                      </div>
                      <p className="text-gray-700 mb-2 italic leading-relaxed">{t.comment}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, ind) => (
                          <Star key={ind} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Sections */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg">
                You might be interested
              </span>
            </h2>
            <AdCardSlider products={optionaldata} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg">
                Similar Products
              </span>
            </h2>
            <SimilarProdSlider products={optionaldata} onProductClick={handlenext} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRender;