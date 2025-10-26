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
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  useEffect(() => {
    console.log("totalItems", totalItems);
  }, [totalItems]);
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
      // navigate(`/search?q=${searchQuery}`);
    }
  };
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      className={`p-5 z-50 fixed w-full ${
        dark ? "bg-black text-white" : "bg-[#2874f0] text-black"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/19/05/notebook-154358_1280.png"
              className="h-10 w-10"
              alt="LapTopiya Logo"
            />
            <h1 className="text-lg font-bold">LapTopiya</h1>
          </div>
          <div className="hidden md:flex relative">
            <form onSubmit={handleSearch} className="relative  max-w-lg ">
              <SearchIcon className="absolute top-2.5 right-3 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Laptop, Brand and More.."
                className={`border p-2 pl-4 pr-4 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  dark
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-800"
                }`}
              />
            </form>

            {searchQuery && (
              <>
                <div className="bg-blue-300 absolute w-full top-[60px]">
                  {searchQuery}
                </div>
              </>
            )}
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button
                className="hover:text-gray-600 cursor-pointer p-2"
                onClick={() => setdark(!dark)}
                aria-label="Toggle dark mode"
              >
                {dark ? <LightModeIcon /> : <DarkModeIcon />}
              </button>

              <button
                className="relative hover:text-gray-600 cursor-pointer p-2"
                onClick={() => navigate("/cart")}
                aria-label="Shopping cart"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <div className="relative group">
                <div className="hover:text-gray-600 cursor-pointer p-2 flex items-center">
                  <Person2Icon />
                </div>

                <div
                  className={`absolute right-0 mt-5 w-48 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                    dark ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                >
                  <ul className="py-2 text-sm">
                    {/* 👇 Show Signup & Login only when user is NOT logged in */}
                    {!token && (
                      <>
                        <li
                          onClick={() => navigate("/sign-up")}
                          className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        >
                          Signup
                        </li>
                        <li
                          onClick={() => navigate("/login")}
                          className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        >
                          Login
                        </li>
                      </>
                    )}

                    {/* 👇 Common options visible to everyone */}
                    <li
                      onClick={() => navigate("/orders")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      My Orders
                    </li>
                    <li
                      onClick={() => navigate("/track-order")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      Track Order
                    </li>
                    <li
                      onClick={() => navigate("/payment-methods")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      Payment Methods
                    </li>
                    <li
                      onClick={() => navigate("/address")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      Update Address
                    </li>
                    <li
                      onClick={() => navigate("/admin-management")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      Admin Management
                    </li>
                    <li
                      onClick={() => navigate("/admin-product-creation")}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      Admin Control
                    </li>
                    {token && (
                      <li
                        onClick={handleLogout}
                        className="px-4 py-2 hover:bg-red-200 dark:hover:bg-red-700 cursor-pointer text-red-500 font-semibold"
                      >
                        Logout
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden cursor-pointer p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </div>

        {/* Mobile Search - Always visible on mobile */}
        <div className="md:hidden mt-3">
          <form onSubmit={handleSearch} className="relative">
            <SearchIcon className="absolute top-2.5 left-3 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Laptop, Brand and More.."
              className={`border p-2 pl-10 pr-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                dark
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-black placeholder-gray-500"
              }`}
            />
          </form>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul
              className={`mt-4 flex flex-col space-y-3 py-4 px-2 rounded-lg ${
                dark ? "bg-gray-800" : "bg-blue-400"
              }`}
            >
              <li
                className="hover:text-gray-300 cursor-pointer p-2 rounded"
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
              >
                Home
              </li>
              <li
                className="hover:text-gray-300 cursor-pointer p-2 rounded"
                onClick={() => {
                  navigate("/about");
                  setIsOpen(false);
                }}
              >
                About
              </li>
              <li
                className="hover:text-gray-300 cursor-pointer p-2 rounded"
                onClick={() => {
                  navigate("/services");
                  setIsOpen(false);
                }}
              >
                Services
              </li>
              <li
                className="hover:text-gray-300 cursor-pointer p-2 rounded"
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
              >
                Contact
              </li>

              {/* Mobile Icons Row */}
              <li className="flex justify-around pt-4 border-t border-gray-500">
                <button
                  className="hover:text-gray-300 cursor-pointer p-2"
                  onClick={() => {
                    setdark(!dark);
                    setIsOpen(false);
                  }}
                  aria-label="Toggle dark mode"
                >
                  {dark ? <LightModeIcon /> : <DarkModeIcon />}
                </button>

                <button
                  className="hover:text-gray-300 cursor-pointer p-2"
                  onClick={() => {
                    navigate("/cart");
                    setIsOpen(false);
                  }}
                  aria-label="Shopping cart"
                >
                  <ShoppingCartIcon />
                </button>

                <button
                  className="hover:text-gray-300 cursor-pointer p-2"
                  onClick={() => {
                    navigate("/profile");
                    setIsOpen(false);
                  }}
                  aria-label="User profile"
                >
                  <Person2Icon />
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
