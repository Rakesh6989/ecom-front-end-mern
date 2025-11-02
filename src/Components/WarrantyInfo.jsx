import React, { useState } from 'react';
import { Shield, CheckCircle, Clock, FileText, Wrench, Package, AlertCircle, Phone, Mail, MapPin, ChevronDown, ChevronUp, Award, Zap } from 'lucide-react';

export default function WarrantyInfo() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const warrantyPlans = [
    {
      name: 'Standard Warranty',
      duration: '1 Year',
      price: 'Included',
      features: [
        'Manufacturing defects coverage',
        'Hardware component replacement',
        'Email & phone support',
        'Authorized service centers',
        'Free diagnostics'
      ],
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      name: 'Extended Warranty',
      duration: '2 Years',
      price: '₹4,999',
      features: [
        'All Standard features',
        'Accidental damage protection',
        'Priority support 24/7',
        'On-site repair service',
        'Battery replacement',
        'Liquid damage coverage'
      ],
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Premium Care',
      duration: '3 Years',
      price: '₹8,999',
      features: [
        'All Extended features',
        'Zero depreciation coverage',
        'Free pickup & drop',
        'Dedicated account manager',
        'Software support included',
        'Cosmetic damage repair',
        'Annual preventive maintenance'
      ],
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
      popular: false
    }
  ];

  const coverageDetails = [
    {
      icon: Wrench,
      title: 'Hardware Repairs',
      description: 'Complete coverage for motherboard, RAM, hard drive, and all internal components',
      color: 'text-blue-600'
    },
    {
      icon: Package,
      title: 'Component Replacement',
      description: 'Genuine parts replacement with certified technicians at authorized centers',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Average repair time of 3-5 business days with real-time status tracking',
      color: 'text-purple-600'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Digital warranty card, repair history, and maintenance records in your account',
      color: 'text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'What is covered under the standard warranty?',
      answer: 'Our standard warranty covers all manufacturing defects, hardware failures, and component malfunctions for 1 year from the date of purchase. This includes motherboard issues, display problems, keyboard/touchpad failures, and internal hardware components.'
    },
    {
      question: 'How do I claim my warranty?',
      answer: 'To claim warranty, simply log in to your Laptopiya account, go to "My Orders", select the product, and click "Raise Service Request". You can also call our helpline at 1800-XXX-XXXX or visit any authorized service center with your invoice and warranty card.'
    },
    {
      question: 'What is NOT covered under warranty?',
      answer: 'Physical damage, liquid spills, unauthorized modifications, cosmetic damages, software issues, accessories like chargers/bags, and normal wear and tear are not covered under standard warranty. However, our Extended and Premium plans offer additional coverage.'
    },
    {
      question: 'Can I extend my warranty after purchase?',
      answer: 'Yes! You can upgrade to Extended or Premium warranty within 30 days of purchase. After 30 days, extension options may be limited based on product inspection.'
    },
    {
      question: 'How long does the repair process take?',
      answer: 'Standard repairs typically take 3-5 business days. Extended and Premium customers get priority service with 1-3 days turnaround. On-site repairs (Premium) are usually completed within 24-48 hours.'
    },
    {
      question: 'Is there a replacement option if repair is not possible?',
      answer: 'Yes, if the same issue occurs 3 times within warranty period or if repair is not feasible, we offer replacement with a similar or better model subject to availability and terms.'
    }
  ];

  const processSteps = [
    { step: 1, title: 'Report Issue', desc: 'Contact us via phone, email, or portal' },
    { step: 2, title: 'Diagnosis', desc: 'Our team analyzes the problem' },
    { step: 3, title: 'Approval', desc: 'Warranty claim verification' },
    { step: 4, title: 'Repair', desc: 'Expert technicians fix the issue' },
    { step: 5, title: 'Delivery', desc: 'Get your laptop back' }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100  pt-[8rem]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-16 h-16 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Warranty & Protection Plans</h1>
          </div>
          <p className="text-center text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive protection for your investment with Laptopiya's industry-leading warranty coverage
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {['overview', 'plans', 'coverage', 'process', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold capitalize whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-4 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              {coverageDetails.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Why Choose Laptopiya Warranty?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Hassle-Free Claims</h4>
                    <p className="text-sm text-blue-100">Simple online process with no hidden terms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Authorized Centers</h4>
                    <p className="text-sm text-blue-100">500+ service centers across India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Genuine Parts</h4>
                    <p className="text-sm text-blue-100">Only OEM components used in repairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plans Section */}
        {activeTab === 'plans' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Protection Plan</h2>
              <p className="text-gray-600">Select the coverage that best fits your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {warrantyPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 ${
                    plan.popular ? 'ring-4 ring-purple-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className={`bg-gradient-to-r ${plan.color} text-white p-6`}>
                    <plan.icon className="w-12 h-12 mb-3" />
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-3xl font-bold">{plan.price}</p>
                    <p className="text-sm opacity-90">{plan.duration} Coverage</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
                      Select Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Coverage Section */}
        {activeTab === 'coverage' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What's Covered</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Covered Issues</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    Manufacturing defects and workmanship issues
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    Hardware component failures (CPU, GPU, RAM, Storage)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    Display issues (dead pixels, backlight failure)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    Keyboard and touchpad malfunctions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    Battery degradation (below 50% capacity)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    Power issues and charging problems
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    Port and connectivity failures
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Not Covered (Standard)</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    Physical damage from drops or impacts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    Liquid damage or spills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    Unauthorized repairs or modifications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    Cosmetic damage (scratches, dents)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    Software issues and virus infections
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    Accessories (bags, mouse, external drives)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    Theft or loss of device
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Extended & Premium Plans</h4>
                  <p className="text-gray-700">
                    Upgrade to our Extended or Premium plans to get coverage for accidental damage, liquid spills, 
                    cosmetic repairs, and many more benefits. Terms and conditions apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Section */}
        {activeTab === 'process' && (
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Claim Process</h2>
            
            <div className="relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    {index !== processSteps.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-purple-600 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Support</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                    <p className="text-gray-600 text-sm">1800-XXX-XXXX</p>
                    <p className="text-gray-500 text-xs">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                    <p className="text-gray-600 text-sm">support@laptopiya.com</p>
                    <p className="text-gray-500 text-xs">24-48 hours response</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Service Centers</h4>
                    <p className="text-gray-600 text-sm">500+ locations</p>
                    <p className="text-gray-500 text-xs">Find nearest center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 text-left pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
              <p className="mb-6 text-blue-100">Our support team is here to help you 24/7</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Investment Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Get comprehensive warranty coverage and peace of mind with every purchase.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl">
            Explore Warranty Plans
          </button>
        </div>
      </div>
    </div>
  );
}