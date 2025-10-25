import { useState } from "react";
import reactLogo from "./assets/react.svg";
import HomePage from "./Pages/Homepage";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/Contactus";
import BlogPage from "./Pages/BlogPage";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import ProductRender from "./Components/ProductRender";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Cart from "./features/Cart";
import LoginForm from "./Pages/LoginPage";
import SuperAdminDashboard from "./Dashboard/SuperAdminDashboard";
import AdminProductCreate from "./Dashboard/AdminProductCreate";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductRender />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin-management" element={<SuperAdminDashboard />} />
        <Route path="/admin-product-creation" element={<AdminProductCreate />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
