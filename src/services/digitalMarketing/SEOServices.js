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
import seoBg from "../../assets/SEOoptimization.jpg";

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

        
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${seoBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">

      {/* Icon Box */}
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white/30">
          <FaSearch className="text-5xl text-white" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent pb-2">
        SEO Services
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
        Dominate search engine rankings and drive sustainable organic growth.
        Our advanced SEO strategies deliver long-term results and measurable ROI.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
      </div>

    </div>
  </div>
</div>


        {/* STATS */}
        <div className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
                {/* FEATURES */}
        <div className="py-20 bg-white relative">
          <div className="container mx-auto px-6">

            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our SEO Services</h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Improve search visibility and attract converting organic traffic
              </p>
            </div>

            {/* FIXED TEXT VISIBILITY */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl text-white">{feature.image}</div>

                    {/* Colored Icons (C selection) */}
                    <feature.icon className="text-3xl text-blue-300 group-hover:text-blue-400" />
                  </div>

                  {/* FIXED TITLE COLOR */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  {/* FIXED DESCRIPTION COLOR */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* PROCESS SECTION (FIXED VISIBILITY) */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">

            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our SEO Process</h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven framework to achieve consistent ranking improvements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl blur opacity-30"></div>

                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl font-bold text-white bg-gray-800 bg-opacity-40 px-4 py-2 rounded-xl">
                        {step.step}
                      </div>

                      {/* colored icons preserved */}
                      <step.icon className="text-3xl text-blue-300" />
                    </div>

                    <h3 className="text-2xl font-bold">{step.title}</h3>

                    <p className="text-gray-300 leading-relaxed text-lg mt-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* CTA */}
        <div className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
          <div className="container mx-auto px-6 text-center">

            <h2 className="text-5xl font-bold mb-8">Ready to Dominate Search Rankings?</h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Let’s build a long-term SEO strategy that grows your organic traffic
              and brings customers who are ready to convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 px-12 py-5 rounded-xl shadow-2xl font-semibold flex items-center gap-3">
                Get Free SEO Audit
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>

              <button className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-5 rounded-xl font-semibold shadow-2xl border">
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


