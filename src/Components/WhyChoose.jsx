import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Truck, 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  Clock,
  Headphones,
  RefreshCw,
  CreditCard,
  Zap,
  Heart,
  ThumbsUp,
  TrendingUp,
  Globe,
  Gift,
  Wrench,
  Phone
} from 'lucide-react';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    laptops: 0,
    rating: 0,
    warranty: 0
  });

  // Counter animation
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters(prev => {
          const newCounters = { ...prev };
          if (newCounters.customers < 50000) newCounters.customers += 1000;
          if (newCounters.laptops < 10000) newCounters.laptops += 200;
          if (newCounters.rating < 4.9) newCounters.rating += 0.1;
          if (newCounters.warranty < 3) newCounters.warranty += 0.1;
          return newCounters;
        });
      }, 50);

      setTimeout(() => clearInterval(interval), 3000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "100% Authentic Products",
      description: "Direct partnerships with Dell, HP, Acer, Apple, and Lenovo ensure genuine products with official warranties",
      highlight: "Zero Duplicate Guarantee",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Free Express Delivery",
      description: "Lightning-fast delivery across India with real-time tracking and secure packaging",
      highlight: "Same Day in Metro Cities",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "3 Year Extended Warranty",
      description: "Comprehensive coverage beyond manufacturer warranty with doorstep service support",
      highlight: "At-Home Service",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: RefreshCw,
      title: "30-Day Easy Returns",
      description: "Hassle-free returns and exchanges with full refund guarantee if not satisfied",
      highlight: "No Questions Asked",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: CreditCard,
      title: "Flexible EMI Options",
      description: "0% interest EMI available on all major credit cards and buy-now-pay-later options",
      highlight: "Starting ₹999/month",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Dedicated tech experts available round the clock for pre & post-purchase assistance",
      highlight: "Live Chat & Call",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const brands = [
    { name: 'Dell', logo: '🖥️', models: '250+' },
    { name: 'HP', logo: '💻', models: '300+' },
    { name: 'Apple', logo: '🍎', models: '50+' },
    { name: 'Acer', logo: '⚡', models: '180+' },
    { name: 'Lenovo', logo: '🔥', models: '220+' },
    { name: 'ASUS', logo: '⭐', models: '150+' }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      review: "Amazing experience! Got my Dell XPS delivered in 2 days with perfect packaging.",
      rating: 5,
      purchase: "Dell XPS 13"
    },
    {
      name: "Priya Patel",
      review: "Best prices in market and excellent customer service. Highly recommended!",
      rating: 5,
      purchase: "MacBook Air M2"
    },
    {
      name: "Amit Kumar",
      review: "EMI options made it so affordable. Got HP Pavilion for my studies.",
      rating: 5,
      purchase: "HP Pavilion 15"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              India's Most Trusted Laptop Store with 50,000+ Happy Customers
            </p>
          </div>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">
                {Math.floor(counters.customers).toLocaleString()}+
              </div>
              <div className="text-gray-700 font-semibold">Happy Customers</div>
            </div>
          </div>
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {Math.floor(counters.laptops).toLocaleString()}+
              </div>
              <div className="text-gray-700 font-semibold">Laptops Sold</div>
            </div>
          </div>
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-100 hover:border-yellow-300">
              <div className="text-3xl md:text-4xl font-black text-yellow-600 mb-2 flex items-center justify-center">
                <Star className="w-8 h-8 mr-1 fill-current" />
                {counters.rating.toFixed(1)}
              </div>
              <div className="text-gray-700 font-semibold">Customer Rating</div>
            </div>
          </div>
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 hover:border-purple-300">
              <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2">
                {Math.floor(counters.warranty)}+ Years
              </div>
              <div className="text-gray-700 font-semibold">Warranty Cover</div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Interactive Features */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Key Advantages</h3>
            
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeFeature;
              
              return (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-500 border-2 ${
                    isActive 
                      ? 'bg-white shadow-xl border-blue-300 scale-105' 
                      : 'bg-white/70 hover:bg-white border-gray-200 hover:border-blue-200 hover:scale-102'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center transform ${isActive ? 'rotate-6' : ''} transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {feature.highlight}
                        </span>
                      </div>
                      
                      {isActive && (
                        <p className="text-gray-600 leading-relaxed animate-fade-in">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Brand Showcase */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Authorized Partner</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-blue-300"
                >
                  <div className="text-4xl mb-2">{brand.logo}</div>
                  <div className="font-bold text-gray-900">{brand.name}</div>
                  <div className="text-sm text-blue-600 font-semibold">{brand.models} Models</div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-xl border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Official Warranty</div>
                  <div className="text-sm text-gray-600">Direct from brands</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl border border-blue-200">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Secure Payment</div>
                  <div className="text-sm text-gray-600">256-bit SSL encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-blue-600">Purchased: {testimonial.purchase}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Laptop?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join 50,000+ satisfied customers who chose us for their laptop needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg">
              Browse Laptops
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Talk to Expert
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-8 space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>3 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-5 h-5" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>

      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        @media (max-width: 768px) {
          .text-4xl.md\\:text-6xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;