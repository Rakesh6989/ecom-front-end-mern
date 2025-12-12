import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { User, ShoppingCart, Zap, Package, Star, ChevronDown, ChevronUp, ZoomIn, Heart, Share2, Truck, Shield, RefreshCw, Award, ChevronLeft, ChevronRight, MapPin, Clock, Phone, Mail, Facebook, Twitter, Linkedin, Link2, Check, X, Gift, Percent, CreditCard } from "lucide-react";
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
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="text-center">
          <div className="relative">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
            <Package className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600" />
          </div>
          <p className="mt-6 text-xl font-semibold text-gray-800">Loading Product Details...</p>
          <p className="mt-2 text-sm text-gray-500">Please wait while we fetch the information</p>
        </div>
      </div>
    );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="text-center">
        <div className="bg-gray-100 rounded-full p-8 inline-block mb-6">
          <Package className="w-20 h-20 text-gray-400" />
        </div>
        <p className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</p>
        <p className="text-gray-500 mb-6">The product you're looking for doesn't exist</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  const handlenext = (id) => {
    window.open(`/products/${id}`, "C");
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
            <span>/</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">{product.brand}</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          {/* LEFT SIDE - Image Gallery (60% width on large screens) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-20">
              {/* Main Image Container */}
              <div className="relative">
                <div 
                  className="relative bg-white p-4 sm:p-8 cursor-crosshair group"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsZooming(true)}
                  onMouseLeave={() => setIsZooming(false)}
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-64 sm:h-96 lg:h-[500px] object-contain transition-transform duration-300"
                  />
                  
                  {/* Image Navigation Arrows */}
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                  </button>

                  {/* Zoom Indicator */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4" />
                    <span className="hidden sm:inline">Hover to zoom</span>
                  </div>

                  {/* Favorite & Share Buttons */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <button 
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    </button>
                    <button className="bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all">
                      <Share2 className="w-5 h-5 text-gray-600" onClick={() => setShowShareModal(true)} />
                    </button>
                  </div>

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
                      {product.discount} OFF
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {product.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                          selectedImage === idx
                            ? "ring-2 sm:ring-3 ring-blue-600 shadow-lg scale-105"
                            : "ring-1 ring-gray-200 hover:ring-gray-400 opacity-70 hover:opacity-100"
                        }`}
                        onClick={() => setSelectedImage(idx)}
                      >
                        <img
                          src={img}
                          alt={`thumb-${idx}`}
                          className="w-full h-full object-contain p-1 sm:p-2 bg-white"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-2 text-xs text-gray-500">
                    {selectedImage + 1} / {product.images.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges - Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 lg:hidden">
              <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border border-gray-100">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs font-semibold text-gray-800">Free Delivery</p>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border border-gray-100">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-green-600" />
                <p className="text-xs font-semibold text-gray-800">Secure Payment</p>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border border-gray-100">
                <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-orange-600" />
                <p className="text-xs font-semibold text-gray-800">Easy Returns</p>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm border border-gray-100">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-purple-600" />
                <p className="text-xs font-semibold text-gray-800">Warranty</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Product Details (40% width on large screens) */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {/* Brand */}
              <div>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.brand}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              {product.ratings && (
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg font-semibold text-sm">
                    <span>{product.ratings.average}</span>
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                  <span className="text-gray-600 font-medium">
                    {product.ratings.total.toLocaleString()} ratings
                  </span>
                </div>
              )}

              {/* Price Section */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-sm">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700">
                    ₹{product.price?.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <>
                      <span className="line-through text-gray-500 text-xl sm:text-2xl">
                        ₹{product.oldPrice?.toLocaleString()}
                      </span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                        {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-green-700 font-medium">Inclusive of all taxes</p>
              </div>

              {/* Offers */}
              {product.offers?.length > 0 && (
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-lg text-sm">
                      OFFERS
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {product.offers.map((offer, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-sm sm:text-base">{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Delivery Information */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  Delivery Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Deliver to</p>
                      <p className="text-sm text-gray-600">Enter pincode to check delivery</p>
                      <div className="flex gap-2 mt-2">
                        <input 
                          type="text" 
                          placeholder="Enter pincode"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                        />
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm">
                          Check
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-800">Delivery by <strong className="text-green-700">Tomorrow</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Gift className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-800">Free delivery on orders above ₹499</span>
                  </div>
                </div>
              </div>

              {/* Available Offers/Coupons */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                  <Percent className="w-5 h-5 text-purple-600" />
                  Available Coupons
                </h3>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-dashed border-purple-300 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-purple-700 text-sm">FIRST100</span>
                      <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                        Apply
                      </button>
                    </div>
                    <p className="text-xs text-gray-600">Get ₹100 off on first order above ₹999</p>
                  </div>
                  <div className="bg-white border-2 border-dashed border-purple-300 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-purple-700 text-sm">SAVE20</span>
                      <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                        Apply
                      </button>
                    </div>
                    <p className="text-xs text-gray-600">Extra 20% off on prepaid orders</p>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-700" />
                  Payment Options
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Credit Card</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Debit Card</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Net Banking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>UPI</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Wallets</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center font-bold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-bold text-gray-900 min-w-[40px] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center font-bold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg">
                  <Zap className="w-5 h-5" />
                  Buy Now
                </button>
              </div>

              {/* Trust Badges - Desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-semibold text-gray-800">Free Delivery</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-semibold text-gray-800">Secure Payment</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <RefreshCw className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <p className="text-sm font-semibold text-gray-800">Easy Returns</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <Award className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm font-semibold text-gray-800">Warranty</p>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">
                    Product Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {expand ? product.description : preview}
                  </p>
                  {islong && (
                    <button
                      className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm sm:text-base"
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
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-5">
              <h3 className="font-bold text-2xl text-white">Technical Specifications</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => {
                  // Icon mapping based on specification key
                  const getIcon = (key) => {
                    const lowerKey = key.toLowerCase();
                    if (lowerKey.includes('processor') || lowerKey.includes('cpu')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <rect x="9" y="9" width="6" height="6" />
                          <line x1="9" y1="1" x2="9" y2="4" />
                          <line x1="15" y1="1" x2="15" y2="4" />
                          <line x1="9" y1="20" x2="9" y2="23" />
                          <line x1="15" y1="20" x2="15" y2="23" />
                          <line x1="20" y1="9" x2="23" y2="9" />
                          <line x1="20" y1="14" x2="23" y2="14" />
                          <line x1="1" y1="9" x2="4" y2="9" />
                          <line x1="1" y1="14" x2="4" y2="14" />
                        </svg>
                      );
                    } else if (lowerKey.includes('ram') || lowerKey.includes('memory')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="6" width="20" height="12" rx="2" />
                          <line x1="6" y1="10" x2="6" y2="14" />
                          <line x1="10" y1="10" x2="10" y2="14" />
                          <line x1="14" y1="10" x2="14" y2="14" />
                          <line x1="18" y1="10" x2="18" y2="14" />
                        </svg>
                      );
                    } else if (lowerKey.includes('storage') || lowerKey.includes('ssd') || lowerKey.includes('hdd')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
                        </svg>
                      );
                    } else if (lowerKey.includes('display') || lowerKey.includes('screen')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      );
                    } else if (lowerKey.includes('battery')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="6" width="18" height="12" rx="2" />
                          <line x1="23" y1="10" x2="23" y2="14" />
                          <line x1="5" y1="10" x2="5" y2="14" />
                          <line x1="9" y1="10" x2="9" y2="14" />
                          <line x1="13" y1="10" x2="13" y2="14" />
                        </svg>
                      );
                    } else if (lowerKey.includes('camera')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                      );
                    } else if (lowerKey.includes('os') || lowerKey.includes('operating')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </svg>
                      );
                    } else if (lowerKey.includes('weight')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      );
                    } else if (lowerKey.includes('color') || lowerKey.includes('colour')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      );
                    } else if (lowerKey.includes('gpu') || lowerKey.includes('graphics')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      );
                    } else if (lowerKey.includes('connectivity') || lowerKey.includes('wifi') || lowerKey.includes('bluetooth')) {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                          <line x1="12" y1="20" x2="12.01" y2="20" />
                        </svg>
                      );
                    } else {
                      return (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      );
                    }
                  };

                  // Color mapping based on specification key
                  const getColor = (key) => {
                    const lowerKey = key.toLowerCase();
                    if (lowerKey.includes('processor') || lowerKey.includes('cpu')) return 'from-blue-500 to-blue-600';
                    if (lowerKey.includes('ram') || lowerKey.includes('memory')) return 'from-purple-500 to-purple-600';
                    if (lowerKey.includes('storage')) return 'from-green-500 to-green-600';
                    if (lowerKey.includes('display') || lowerKey.includes('screen')) return 'from-orange-500 to-orange-600';
                    if (lowerKey.includes('battery')) return 'from-yellow-500 to-yellow-600';
                    if (lowerKey.includes('camera')) return 'from-pink-500 to-pink-600';
                    if (lowerKey.includes('os')) return 'from-indigo-500 to-indigo-600';
                    if (lowerKey.includes('weight')) return 'from-gray-500 to-gray-600';
                    if (lowerKey.includes('gpu') || lowerKey.includes('graphics')) return 'from-red-500 to-red-600';
                    if (lowerKey.includes('connectivity')) return 'from-teal-500 to-teal-600';
                    return 'from-cyan-500 to-cyan-600';
                  };

                  return (
                    <div
                      key={key}
                      className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-5 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                    >
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${getColor(key)} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {getIcon(key)}
                      </div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        {key.replace(/_/g, ' ')}
                      </h4>
                      <p className="text-xl font-bold text-gray-900">
                        {value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Customer Reviews */}
        {product.testimonials?.length > 0 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-12">
            <h3 className="font-bold text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <Star className="w-7 h-7 fill-yellow-500 text-yellow-500" />
              Customer Reviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {product.testimonials.map((t) => (
                <div
                  key={t._id}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full p-3">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900">{t.user}</p>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, ind) => (
                          <Star 
                            key={ind} 
                            className={`w-4 h-4 ${ind < t.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">"{t.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-12">
          <h3 className="font-bold text-2xl mb-6 text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: "What is the warranty period for this product?",
                a: "This product comes with a 1-year manufacturer warranty covering manufacturing defects."
              },
              {
                q: "Is Cash on Delivery available?",
                a: "Yes, COD is available for orders across all serviceable pincodes."
              },
              {
                q: "What is the return policy?",
                a: "You can return the product within 7 days of delivery if you're not satisfied. Product should be unused and in original packaging."
              },
              {
                q: "How long does delivery take?",
                a: "Standard delivery takes 3-5 business days. Express delivery options are available in select areas."
              },
              {
                q: "Is installation service available?",
                a: "Yes, professional installation services are available at an additional cost in select cities."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Seller Information */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-200 mb-12">
          <h3 className="font-bold text-2xl mb-6 text-gray-900">Seller Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">TechStore India</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 fill-green-500 text-green-500" />
                    <span className="text-sm text-gray-700"><strong>4.5/5</strong> Seller Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700"><strong>10,000+</strong> Products Sold</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700"><strong>Verified</strong> Seller</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Contact Seller</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">support@techstore.in</span>
                  </div>
                  <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Chat with Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zoom Modal */}
        {isZooming && (
          <div className="hidden lg:block fixed right-8 top-24 w-[500px] h-[500px] bg-white rounded-2xl shadow-2xl border-4 border-blue-300 overflow-hidden z-50 animate-in fade-in duration-300">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url(${product.images[selectedImage]})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: '300%',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowShareModal(false)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Share this product</h3>
                <button onClick={() => setShowShareModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="bg-blue-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Facebook</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="bg-blue-400 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Twitter className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Twitter</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="bg-blue-700 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">LinkedIn</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="bg-gray-700 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Link2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">Copy</span>
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-2">
                <input 
                  type="text" 
                  value={window.location.href}
                  readOnly
                  className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Related Products Sections */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg">
                  You Might Also Like
                </span>
              </h2>
            </div>
            <AdCardSlider products={optionaldata} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg">
                  Similar Products
                </span>
              </h2>
            </div>
            <SimilarProdSlider products={optionaldata} onProductClick={handlenext} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRender;