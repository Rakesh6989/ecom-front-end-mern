import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  HelpCircle,
  User,
  Shield,
  Building,
  Info,
  Laptop,
  Truck,
  FileText,
  ChevronRight,
} from "lucide-react";

export default function LaptopiyaSitemap() {
  const sections = [
    {
      title: "Home",
      icon: <Home className="text-cyan-400" size={22} />,
      links: [
        { name: "Featured Laptops", path: "/#featured" },
        { name: "Top Brands", path: "/#brands" },
        { name: "Latest Offers", path: "/#offers" },
      ],
    },
    {
      title: "Shop",
      icon: <ShoppingBag className="text-blue-400" size={22} />,
      links: [
        { name: "Gaming Laptops", path: "/category/gaming" },
        { name: "Student Laptops", path: "/category/student" },
        { name: "Business Laptops", path: "/category/business" },
        { name: "Accessories", path: "/category/accessories" },
      ],
    },
    {
      title: "Support",
      icon: <HelpCircle className="text-green-400" size={22} />,
      links: [
        { name: "FAQs", path: "/faq" },
        { name: "Contact Us", path: "/contact" },
        { name: "Track Order", path: "/track-order" },
        { name: "Warranty & Repairs", path: "/warranty" },
      ],
    },
    {
      title: "My Account",
      icon: <User className="text-amber-400" size={22} />,
      links: [
        { name: "Login / Signup", path: "/login" },
        { name: "Cart", path: "/cart" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "Orders", path: "/orders" },
      ],
    },
    {
      title: "Policies",
      icon: <Shield className="text-rose-400" size={22} />,
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Return Policy", path: "/return-policy" },
        { name: "Terms & Conditions", path: "/terms" },
      ],
    },
    {
      title: "About Us",
      icon: <Building className="text-purple-400" size={22} />,
      links: [
        { name: "Company Overview", path: "/about" },
        { name: "Our Mission", path: "/about#mission" },
        { name: "Careers", path: "/careers" },
        { name: "Investors", path: "/investors" },
      ],
    },
  ];

  return (
    <div className="min-h-screen  pt-[8rem] bg-gradient-to-br from-[#0A0F1D] via-[#12192A] to-[#0A0F1D] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          🌐 Laptopiya Sitemap
        </motion.h1>

        {/* Sitemap grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/60 transition-colors duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="font-semibold text-lg">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-all"
                    >
                      <ChevronRight size={16} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO + Footer Info */}
        <div className="mt-16 bg-slate-800/40 border border-slate-700 rounded-2xl p-6 text-center">
          <p className="text-sm text-slate-400">
            This Sitemap helps search engines and users easily navigate
            <span className="text-cyan-400 font-semibold"> Laptopiya</span>.
            Updated automatically whenever new pages are added.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700 text-sm">
              <FileText size={16} /> Download XML Sitemap
            </button>
            <button className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 text-sm">
              <Truck size={16} /> Submit to Google
            </button>
          </div>
        </div>

        <footer className="text-center mt-10 text-slate-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Laptopiya</span> — All
          Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
