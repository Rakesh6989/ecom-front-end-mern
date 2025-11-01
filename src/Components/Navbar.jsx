import { useEffect, useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { darkmodeContext } from "../Context/DarkModeContext";
import { CartContext } from "../Context/cartContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const { dark, setdark } = useContext(darkmodeContext);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };
  
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };
  
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className={`fixed w-full top-0 left-0 z-50 shadow-lg transition-all duration-300 ${
          dark 
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-b border-gray-700" 
            : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white"
        }`}>
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate("/")}>
              <div className="relative">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/05/notebook-154358_1280.png"
                  className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  alt="LapTopiya Logo"
                />
                <div className="absolute -inset-1 bg-white opacity-20 rounded-full blur-md group-hover:opacity-30 transition-opacity" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wide">LapTopiya</h1>
                <p className="text-xs opacity-80">Your Tech Partner</p>
              </div>
            </div>

            <div className="hidden md:flex relative" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative">
                <div className="relative group">
                  <SearchIcon className="absolute top-3 left-4 text-gray-400 transition-colors group-hover:text-blue-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSearchResults(e.target.value.length > 0);
                    }}
                    onFocus={() => searchQuery && setShowSearchResults(true)}
                    placeholder="Search for Laptops, Brands and More..."
                    className={`border-2 py-3 pl-12 pr-4 rounded-full w-96 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                      dark
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                        : "bg-white border-white text-gray-800 placeholder-gray-500 focus:border-blue-300 focus:ring-blue-300 shadow-md"
                    }`}
                  />
                </div>
              </form>

              {showSearchResults && searchQuery && (
                <div className={`absolute w-full top-16 rounded-xl shadow-2xl overflow-hidden z-50 ${
                  dark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                }`}>
                  <div className="p-4">
                    <p className="text-sm font-semibold mb-3 opacity-70">Search Results for "{searchQuery}"</p>
                    <div className="space-y-2">
                      <div className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        dark ? "hover:bg-gray-700" : "hover:bg-gray-100"
                      }`}>
                        <p className="font-medium">Example Result 1</p>
                        <p className="text-xs opacity-60">Laptop category</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  dark ? "hover:bg-gray-700 bg-gray-800" : "hover:bg-blue-400 bg-blue-500"
                }`}
                onClick={() => setdark(!dark)}
                aria-label="Toggle dark mode"
              >
                {dark ? <LightModeIcon className="text-yellow-300" /> : <DarkModeIcon className="text-gray-800" />}
              </button>

              <button
                className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  dark ? "hover:bg-gray-700 bg-gray-800" : "hover:bg-blue-400 bg-blue-500"
                }`}
                onClick={() => navigate("/cart")}
                aria-label="Shopping cart"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              <div className="relative group">
                <button className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    dark ? "hover:bg-gray-700 bg-gray-800" : "hover:bg-blue-400 bg-blue-500"
                  }`}>
                  <Person2Icon className="w-6 h-6" />
                </button>

                <div className={`absolute right-0 mt-4 w-56 rounded-xl shadow-2xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 overflow-hidden ${
                    dark ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-800 border border-gray-200"
                  }`}>
                  {token && (
                    <div className={`px-4 py-3 border-b ${dark ? "border-gray-700" : "border-gray-200"}`}>
                      <p className="font-semibold">Welcome back!</p>
                      <p className="text-xs opacity-60">Your Account</p>
                    </div>
                  )}

                  <ul className="py-2 text-sm">
                    {!token && (
                      <div className={`pb-2 mb-2 border-b ${dark ? "border-gray-700" : "border-gray-200"}`}>
                        <li onClick={() => navigate("/sign-up")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                            dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                          }`}>
                          <span>📝</span> Sign Up
                        </li>
                        <li onClick={() => navigate("/login")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                            dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                          }`}>
                          <span>🔐</span> Login
                        </li>
                      </div>
                    )}

                    <li onClick={() => navigate("/orders")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                        dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                      }`}>
                      <span>📦</span> My Orders
                    </li>
                    <li onClick={() => navigate("/track-order")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                        dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                      }`}>
                      <span>🚚</span> Track Order
                    </li>
                    <li onClick={() => navigate("/payment-methods")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                        dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                      }`}>
                      <span>💳</span> Payment Methods
                    </li>
                    <li onClick={() => navigate("/address")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                        dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                      }`}>
                      <span>📍</span> Update Address
                    </li>

                    <div className={`pt-2 mt-2 border-t ${dark ? "border-gray-700" : "border-gray-200"}`}>
                      <li onClick={() => navigate("/admin-management")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                          dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                        }`}>
                        <span>👨‍💼</span> Admin Management
                      </li>
                      <li onClick={() => navigate("/admin-product-creation")} className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 ${
                          dark ? "hover:bg-gray-700" : "hover:bg-blue-50"
                        }`}>
                        <span>⚙️</span> Admin Control
                      </li>
                    </div>

                    {token && (
                      <li onClick={handleLogout} className="px-4 py-3 cursor-pointer transition-colors flex items-center gap-2 mt-2 border-t border-red-200 hover:bg-red-50 text-red-600 font-semibold">
                        <span>🚪</span> Logout
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <button className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                dark ? "hover:bg-gray-700" : "hover:bg-blue-400"
              }`} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
          </div>

          <div className="md:hidden mt-4">
            <form onSubmit={handleSearch} className="relative">
              <SearchIcon className="absolute top-3 left-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Laptops, Brands..."
                className={`border-2 py-3 pl-12 pr-4 rounded-full w-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                  dark
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    : "bg-white border-white text-gray-800 placeholder-gray-500 focus:border-blue-300 focus:ring-blue-300"
                }`}
              />
            </form>
          </div>

          {isOpen && (
            <div className={`md:hidden fixed left-0 right-0 top-[140px] mx-4 rounded-xl shadow-2xl z-50 transition-all duration-300 overflow-hidden ${
              dark ? "bg-gray-800 border border-gray-700" : "bg-white text-gray-800 border border-gray-200"
            }`}>
              <ul className="py-2">
                <li className={`px-6 py-4 cursor-pointer transition-colors font-medium ${dark ? "hover:bg-gray-700" : "hover:bg-blue-50"}`}
                  onClick={() => { navigate("/"); setIsOpen(false); }}>
                  🏠 Home
                </li>
                <li className={`px-6 py-4 cursor-pointer transition-colors font-medium ${dark ? "hover:bg-gray-700" : "hover:bg-blue-50"}`}
                  onClick={() => { navigate("/about"); setIsOpen(false); }}>
                  ℹ️ About
                </li>
                <li className={`px-6 py-4 cursor-pointer transition-colors font-medium ${dark ? "hover:bg-gray-700" : "hover:bg-blue-50"}`}
                  onClick={() => { navigate("/services"); setIsOpen(false); }}>
                  🛠️ Services
                </li>
                <li className={`px-6 py-4 cursor-pointer transition-colors font-medium ${dark ? "hover:bg-gray-700" : "hover:bg-blue-50"}`}
                  onClick={() => { navigate("/contact"); setIsOpen(false); }}>
                  📞 Contact
                </li>

                <li className={`flex justify-around py-6 mt-2 border-t ${dark ? "border-gray-700" : "border-gray-200"}`}>
                  <button className={`p-3 rounded-full transition-all ${dark ? "hover:bg-gray-700 bg-gray-900" : "hover:bg-blue-100 bg-blue-50"}`}
                    onClick={() => { setdark(!dark); setIsOpen(false); }}>
                    {dark ? <LightModeIcon className="text-yellow-300" /> : <DarkModeIcon className="text-gray-800" />}
                  </button>

                  <button className={`relative p-3 rounded-full transition-all ${dark ? "hover:bg-gray-700 bg-gray-900" : "hover:bg-blue-100 bg-blue-50"}`}
                    onClick={() => { navigate("/cart"); setIsOpen(false); }}>
                    <ShoppingCartIcon />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                        {totalItems}
                      </span>
                    )}
                  </button>

                  <button className={`p-3 rounded-full transition-all ${dark ? "hover:bg-gray-700 bg-gray-900" : "hover:bg-blue-100 bg-blue-50"}`}
                    onClick={() => { navigate("/profile"); setIsOpen(false); }}>
                    <Person2Icon />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;