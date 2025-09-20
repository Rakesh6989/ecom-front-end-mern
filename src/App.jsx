import { useState } from "react";
import reactLogo from "./assets/react.svg";
import HomePage from "./Pages/Homepage";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/Contactus";
import BlogPage from "./Pages/BlogPage";
import "./App.css";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog-page" element={<BlogPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
