import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { darkmodeContext } from "../Context/DarkModeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
function Navbar() {
  const { dark, setdark } = useContext(darkmodeContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`py-3 ${
        dark ? "bg-black text-white" : "bg-blue-300 text-black"
      } `}
    >
      <nav className={`container-box  flex justify-between  items-center`}>
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/19/05/notebook-154358_1280.png"
            className="h-12"
          />
          <h1 className="text-sm">LapTopiya</h1>
        </div>

        <ul className="hidden md:flex md:gap-5 space-x-6">
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => setdark(!dark)}
          >
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </li>

          <li className="hover:text-gray-200 cursor-pointer">
            <SearchIcon />
          </li>
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <ShoppingCartIcon />
          </li>

          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <Person2Icon />
          </li>
        </ul>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>

        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center space-y-3 py-4 md:hidden">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">About</li>
            <li className="hover:text-gray-200 cursor-pointer">Services</li>
            <li className="hover:text-gray-200 cursor-pointer">Contact</li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
