import React from "react";
import { 
  FaSearch, 
  FaChartLine, 
  FaMobile, 
  FaShoppingCart, 
  FaArrowRight, 
  FaStar, 
  FaGlobe, 
  FaRocket, 
  FaLink, 
  FaFileAlt, 
  FaGratipay 
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SEOServices = () => {
  const features = [
    {
      icon: FaSearch,
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to target the right audience with high-intent search terms",
      image: "🔍"
    },
    {
      icon: FaChartLine,
      title: "Technical SEO",
      description: "Website optimization for search engine crawling, indexing, and performance",
      image: "⚙️"
    },
    {
      icon: FaMobile,
      title: "Mobile Optimization",
      description: "Ensure your website provides excellent user experience across all devices",
      image: "📱"
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce SEO",
      description: "Product page optimization and category structure for online stores",
      image: "🛒"
    },
    {
      icon: FaStar,
      title: "Local SEO",
      description: "Dominate local search results and Google My Business listings",
      image: "📍"
    },
    {
      icon: FaGlobe,
      title: "International SEO",
      description: "Global search optimization for multi-language and multi-region targeting",
      image: "🌎"
    },
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities",
      icon: FaSearch
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom SEO roadmap tailored to your business goals and target audience",
      icon: FaChartLine
    },
    {
      step: "03",
      title: "On-Page Optimization",
      description: "Technical and content optimization across all website pages",
      icon: FaFileAlt
    },
    {
      step: "04",
      title: "Content Creation",
      description: "SEO-optimized content that ranks well and engages your audience",
      icon: FaRocket
    },
    {
      step: "05",
      title: "Link Building",
      description: "Strategic acquisition of high-quality backlinks from authoritative sites",
      icon: FaLink
    },
    {
      step: "06",
      title: "Monitoring & Reporting",
      description: "Continuous tracking and optimization based on performance data",
      icon: FaGratipay
    },
  ];


  const stats = [
    { number: "85%", label: "Organic Traffic Growth" },
    { number: "60%", label: "Keyword Ranking Improvement" },
    { number: "45%", label: "Conversion Rate Increase" },
    { number: "24/7", label: "Rank Monitoring" }
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gray-700 to-transparent opacity-20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gray-600 to-transparent opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white border-opacity-30">
                  <FaSearch className="text-5xl text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                SEO Services
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Dominate search engine rankings and drive sustainable organic growth. 
                Our data-driven SEO strategies deliver long-term results and measurable ROI for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Get SEO Audit
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-30 hover:border-opacity-50">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our SEO Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive SEO solutions to improve your search visibility and drive qualified, converting traffic
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-800 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl text-gray-100">
                      {feature.image}
                    </div>
                    <div className="text-gray-300">
                      <feature.icon className="text-3xl opacity-80" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our SEO Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology for sustainable search engine success and long-term growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl font-bold text-gray-100 bg-gray-800 bg-opacity-30 px-4 py-2 rounded-xl">
                        {step.step}
                      </div>
                      <div className="text-gray-100">
                        <step.icon className="text-3xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's develop an SEO strategy that drives sustainable growth and puts your business 
              in front of ready-to-buy customers searching for your products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                Get Free SEO Audit
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white hover:border-gray-100 shadow-2xl">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SEOServices;
