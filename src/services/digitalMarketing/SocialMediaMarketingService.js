import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShare,
  FaHeart,
  FaEye,
  FaMobile,
  FaPalette,
  FaVideo,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SocialMediaMarketingService = () => {
  const platforms = [
    {
      icon: FaFacebook,
      name: "Facebook",
      color: "from-blue-600 to-blue-800",
      description: "Targeted ads and engaging content for the world's largest social network"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      color: "from-pink-500 to-rose-600",
      description: "Visual storytelling and influencer partnerships for brand growth"
    },
    {
      icon: FaTiktok,
      name: "TikTok",
      color: "from-gray-900 to-gray-700",
      description: "Viral video content and trend-based marketing for Gen Z"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      color: "from-blue-700 to-blue-900",
      description: "B2B lead generation and professional brand building"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      color: "from-sky-500 to-cyan-600",
      description: "Real-time engagement and trend participation"
    },
    {
      icon: FaYoutube,
      name: "YouTube",
      color: "from-red-600 to-red-800",
      description: "Video content strategy and channel management"
    },
  ];

  const services = [
    {
      icon: FaChartLine,
      title: "Social Media Strategy",
      description: "Customized social media roadmap aligned with your business objectives",
      features: ["Content Calendar", "Platform Selection", "Audience Analysis", "Competitor Research"]
    },
    {
      icon: FaPalette,
      title: "Content Creation",
      description: "Eye-catching visuals and compelling copy that resonates with your audience",
      features: ["Graphic Design", "Video Production", "Copywriting", "Brand Guidelines"]
    },
    {
      icon: FaUsers,
      title: "Community Management",
      description: "Build relationships and foster engagement with your audience",
      features: ["Comment Management", "Message Responses", "Engagement Growth", "Brand Advocacy"]
    },
    {
      icon: FaRocket,
      title: "Paid Advertising",
      description: "Targeted social media ads that drive conversions and ROI",
      features: ["Ad Campaigns", "Audience Targeting", "A/B Testing", "ROI Tracking"]
    },
    {
      icon: FaVideo,
      title: "Influencer Marketing",
      description: "Leverage trusted voices to amplify your brand message",
      features: ["Influencer Vetting", "Campaign Management", "Relationship Building", "Performance Tracking"]
    },
    {
      icon: FaMobile,
      title: "Social Commerce",
      description: "Turn social engagement into direct sales and revenue",
      features: ["Shop Integration", "Product Tags", "Checkout Optimization", "Sales Tracking"]
    },
  ];

  const results = [
    { metric: "4.5M", label: "Total Reach", icon: FaEye, color: "from-orange-500 to-amber-500" },
    { metric: "1.2M", label: "Engagements", icon: FaHeart, color: "from-orange-500 to-amber-500" },
    { metric: "320%", label: "ROI Increase", icon: FaChartLine, color: "from-orange-500 to-amber-500" },
    { metric: "85K", label: "Leads Generated", icon: FaUsers, color: "from-orange-500 to-amber-500" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your brand, audience, and competitive landscape"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom social media strategy tailored to your business goals"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Production of engaging content across selected platforms"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Strategic posting, community management, and engagement"
    },
    {
      step: "05",
      title: "Paid Amplification",
      description: "Targeted advertising to boost reach and drive conversions"
    },
    {
      step: "06",
      title: "Analysis & Optimization",
      description: "Performance tracking and continuous strategy improvement"
    },
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "Secure Campaign Management",
      description: "Your data and accounts are protected with enterprise-grade security"
    },
    {
      icon: FaStar,
      text: "Proven Results",
      description: "Track record of delivering measurable ROI for clients"
    },
    {
      icon: FaRocket,
      text: "Rapid Growth",
      description: "Quick implementation with visible results in weeks"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-white bg-opacity-10 rounded-3xl backdrop-blur-sm border border-white border-opacity-20">
                  <FaShare className="text-5xl text-orange-400" />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Social Media Marketing
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Transform your social presence into a powerful growth engine. 
                We create meaningful connections that drive engagement, build communities, and generate real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                  Start Your Campaign
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                  View Success Stories
                </button>
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

        {/* Platforms Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We master every major social platform to connect with your audience wherever they are
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${platform.color} p-4 rounded-2xl text-white text-2xl shadow-lg`}>
                      <platform.icon />
                    </div>
                    <div className="text-2xl font-bold text-white">{platform.name}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Social Media Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-end social media solutions designed to drive meaningful results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-700 group/item hover:text-orange-600 transition-colors duration-200"
                      >
                        <div className="bg-green-100 p-1 rounded-lg mr-3 group-hover/item:bg-green-200 transition-colors duration-200">
                          <FaCheck className="text-green-600 text-sm" />
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

        {/* Process Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Our 6-Step Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A strategic approach to social media success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="text-3xl font-bold text-orange-400 bg-orange-500/10 px-4 py-2 rounded-xl inline-block mb-6 border border-orange-500/20">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
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
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create a social media presence that captivates your audience, 
              builds brand loyalty, and drives measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center gap-3">
                Launch Your Campaign
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                Book Strategy Call
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SocialMediaMarketingService;