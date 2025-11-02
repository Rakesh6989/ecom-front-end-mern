import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 md:px-8">
      <div className="container-box mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Market Place Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Market Place</h3>
            <p className="mb-4 text-sm">
              Subscribe to our Email alerts to receive early discount offers,
              and new products info.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email Address*"
                className="bg-transparent border border-gray-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 mb-2 sm:mb-0 sm:mr-2 flex-grow"
              />
              <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ's
                  </Link>
                </li>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cancel Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Return Order
                </a>
              </li>
              <li>
                <Link
                  to="/warranty-info"
                  className="hover:text-white transition-colors"
                >
                  Warranty Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/return-policy"
                  className="hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="hover:text-white transition-colors"
                >
                  SiteMap
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/term-and-conditions"
                  className="hover:text-white transition-colors"
                >
                  Term and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-white transition-colors"
                >
                 About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-white transition-colors"
                >
                 Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service-centers"
                  className="hover:text-white transition-colors"
                >
                Service Centers
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6">
        {/* You can add a copyright notice or other footer content here */}
      </div>
    </footer>
  );
};

export default Footer;
