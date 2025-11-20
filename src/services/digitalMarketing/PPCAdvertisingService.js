import React from "react";
import {
  FaChartLine,
  FaDollarSign,
  FaMousePointer,
  FaSearch,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaCog,
  FaSync,
  FaClock,
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaFilter,
  FaBullseye,
  FaFileAlt,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ppcBg from "../../assets/ppcdev.jpg";



const PPCAdvertisingService = () => {
  const services = [
    {
      icon: FaGoogle,
      title: "Google Ads",
      description: "Maximize visibility on the world's largest search engine",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Ads"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaFacebook,
      title: "Facebook & Instagram Ads",
      description: "Reach your target audience with precision targeting",
      features: ["News Feed Ads", "Story Ads", "Carousel Ads", "Lead Generation"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn Ads",
      description: "Connect with professionals and decision-makers",
      features: ["Sponsored Content", "Message Ads", "Text Ads", "Dynamic Ads"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaTwitter,
      title: "Twitter Ads",
      description: "Amplify your message in real-time conversations",
      features: ["Promoted Tweets", "Follower Ads", "Trend Takeovers", "Video Ads"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaMousePointer,
      title: "Retargeting Campaigns",
      description: "Convert visitors who showed interest in your brand",
      features: ["Pixel Implementation", "Custom Audiences", "Dynamic Retargeting", "Cross-Platform"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaBullseye,
      title: "PPC Strategy & Management",
      description: "Comprehensive campaign management and optimization",
      features: ["Bid Management", "A/B Testing", "Conversion Tracking", "ROI Analysis"],
      color: "from-orange-500 to-amber-500"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Account Audit",
      description: "Comprehensive analysis of your current PPC performance",
      icon: FaSearch
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom PPC roadmap tailored to your business goals",
      icon: FaCog
    },
    {
      step: "03",
      title: "Campaign Setup",
      description: "Technical implementation and audience targeting",
      icon: FaRocket
    },
    {
      step: "04",
      title: "Launch & Monitor",
      description: "Campaign activation with real-time performance tracking",
      icon: FaChartLine
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous improvement based on performance data",
      icon: FaSync
    },
    {
      step: "06",
      title: "Reporting & Analysis",
      description: "Detailed insights and ROI measurement",
      icon: FaFileAlt
    },
  ];

  const results = [
    { metric: "4.8x", label: "Average ROI", icon: FaDollarSign, color: "from-orange-500 to-amber-500" },
    { metric: "63%", label: "Cost Reduction", icon: FaChartLine, color: "from-orange-500 to-amber-500" },
    { metric: "285%", label: "Conversion Increase", icon: FaUsers, color: "from-orange-500 to-amber-500" },
    { metric: "24/7", label: "Campaign Monitoring", icon: FaClock, color: "from-orange-500 to-amber-500" },
  ];

  const platforms = [
    {
      name: "Google Ads",
      description: "Search, Display, Shopping, and YouTube advertising",
      metrics: ["95% of all searches", "3.5B+ daily searches", "200M+ website visitors"],
      icon: FaGoogle
    },
    {
      name: "Facebook & Instagram",
      description: "Social media advertising with advanced targeting",
      metrics: ["2.9B+ monthly active users", "Precise demographic targeting", "High engagement rates"],
      icon: FaFacebook
    },
    {
      name: "LinkedIn",
      description: "B2B focused professional network advertising",
      metrics: ["830M+ professionals", "Decision-maker targeting", "High-value leads"],
      icon: FaLinkedin
    }
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "Google Premier Partner",
      description: "Certified experts in Google Ads management"
    },
    {
      icon: FaStar,
      text: "Proven ROI",
      description: "Track record of delivering positive returns"
    },
    {
      icon: FaRocket,
      text: "Rapid Results",
      description: "See campaign performance in days, not months"
    }
  ];

  
  const features = [
    {
      category: "Advanced Targeting",
      items: ["Demographic Targeting", "Geographic Targeting", "Behavioral Targeting", "Custom Audiences", "Lookalike Audiences", "Device Targeting"],
      icon: FaBullseye
    },
    {
      category: "Optimization Tools",
      items: ["Bid Management", "Keyword Optimization", "Ad Copy Testing", "Landing Page Optimization", "Conversion Tracking", "ROI Analysis"],
      icon: FaFilter
    },
    {
      category: "Reporting & Analytics",
      items: ["Real-time Dashboards", "Custom Reports", "Competitor Analysis", "Conversion Attribution", "ROI Tracking", "Performance Insights"],
      icon: FaChartLine
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
<div
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
  style={{ backgroundImage: `url(${ppcBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Background Glow Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-20"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">

      {/* Icon */}
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm border border-white/30">
          <FaChartLine className="text-5xl text-orange-400" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent pb-3">
        PPC Advertising
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
        Drive immediate results with data-driven PPC campaigns.
        Get in front of ready-to-buy customers and maximize your advertising ROI.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
      </div>

    </div>
  </div>
</div>


        {/* Trust Badges */}
        <div className="py-12 bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{badge.text}</div>
                    <div className="text-sm text-gray-400">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Stats */}
        <div className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center group">
                  <div className={`bg-gradient-to-r ${result.color} p-4 rounded-2xl inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <result.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{result.metric}</div>
                  <div className="text-lg text-gray-600 font-medium">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                PPC Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive PPC management across all major advertising platforms
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl text-white text-2xl shadow-lg`}>
                      <service.icon />
                    </div>
                    <div className="text-2xl font-bold text-white">{service.title}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-300 group/item hover:text-orange-400 transition-colors duration-200"
                      >
                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3 group-hover/item:bg-orange-500/30 transition-colors duration-200">
                          <FaCheck className="text-orange-400 text-sm" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Features Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Advanced PPC Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leverage cutting-edge tools and strategies for maximum campaign performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {feature.category}
                  </h3>
                  <div className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-gray-700 group/item hover:text-orange-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-1 rounded-lg mr-3 group-hover/item:bg-green-200 transition-colors duration-200">
                          <FaCheck className="text-green-600 text-sm" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Stats Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Advertising Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Reach your audience across the most powerful advertising networks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl shadow-lg">
                      <platform.icon />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="space-y-3">
                    {platform.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center text-gray-300 group/item hover:text-orange-400 transition-colors duration-200"
                      >
                        <div className="bg-orange-500/20 p-1 rounded-lg mr-3">
                          <FaCheck className="text-orange-400 text-sm" />
                        </div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our PPC Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A systematic approach to driving PPC success and maximizing ROI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 text-gray-900 rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-orange-400 bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">
                        {step.step}
                      </div>
                      <div className="text-orange-400">
                        <step.icon className="text-2xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       

        {/* CTA Section */}
        <div className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Scale with PPC?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create PPC campaigns that drive qualified traffic, generate leads, 
              and deliver measurable ROI for your business.
            </p>
            <div className="flex justify-center items-center mt-6">
              <button 
              onClick={() => (window.location.href = "/contact-us")}
              className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center gap-3">
                Start Your Campaign
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
            </div>

            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PPCAdvertisingService;