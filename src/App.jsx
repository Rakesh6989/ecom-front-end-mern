import HomePage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/Contactus";
import BlogPage from "./Pages/BlogPage";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import SignUp from "./Pages/SignUp";
import ProductRender from "./Components/ProductRender";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Cart from "./features/Cart";
import LoginForm from "./Pages/LoginPage";
import SuperAdminDashboard from "./Dashboard/SuperAdminDashboard";
import AdminProductCreate from "./Dashboard/AdminProductCreate";
import ProtectedRoute from "./Components/ProtectedRoute";
import ForgotPassword from "./Components/ForgotPassword";
import WarrantyInfo from "./Components/WarrantyInfo";
import LaptopiyaHelpCenter from "./Components/HelpCenter";
import LaptopiyaReturnPolicy from "./Components/ReturnPolicy";
import LaptopiyaPrivacyPolicy from "./Components/PrivacyPolicy";
import LaptopiyaTermsAndConditions from "./Components/TermAndConditions";
import LaptopiyaSitemap from "./Components/Sitemap";
import LaptopiyaAboutUs from "./Components/AboutUs";
import ServiceCenters from "./Components/ServiceCenters";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about-us" element={<LaptopiyaAboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductRender />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin-management" element={<SuperAdminDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/warranty-info" element={<WarrantyInfo />} />
        <Route path="/faq" element={<LaptopiyaHelpCenter />} />
        <Route path="/return-policy" element={<LaptopiyaReturnPolicy />} />
        <Route path="/privacy-policy" element={<LaptopiyaPrivacyPolicy />} />
        <Route path="/term-and-conditions" element={<LaptopiyaTermsAndConditions />} />
        <Route path="/term-and-conditions" element={<LaptopiyaTermsAndConditions />} />
        <Route path="/service-centers" element={<ServiceCenters />} />
        <Route path="/sitemap" element={<LaptopiyaSitemap />} />
        <Route
          path="/admin-product-creation"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminProductCreate />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
