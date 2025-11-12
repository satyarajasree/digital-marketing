import React from "react";
import {
  FaPen,
  FaVideo,
  FaPalette,
  FaPhotoVideo,
  FaMicrophone,
  FaEdit,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaLightbulb,
  FaCog,
  FaSync,
  FaLayerGroup,
  FaMagic,
  FaEye,
  FaHeart,
  FaClock,
  FaAward,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContentCreationService = () => {
  const services = [
    {
      icon: FaPen,
      title: "Copywriting",
      description: "Compelling written content that converts readers into customers",
      features: ["Blog Posts", "Website Copy", "Product Descriptions", "Email Campaigns"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaVideo,
      title: "Video Production",
      description: "Professional video content that engages and tells your brand story",
      features: ["Commercial Videos", "Social Media Clips", "Product Demos", "Testimonials"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaPalette,
      title: "Graphic Design",
      description: "Stunning visuals that capture attention and communicate your message",
      features: ["Social Media Graphics", "Infographics", "Brand Assets", "Marketing Materials"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaPhotoVideo,
      title: "Photography",
      description: "High-quality imagery that showcases your products and brand",
      features: ["Product Photography", "Lifestyle Shots", "Brand Photography", "Event Coverage"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaMicrophone,
      title: "Audio Production",
      description: "Crystal-clear audio content for podcasts and voiceovers",
      features: ["Podcast Production", "Voiceovers", "Audio Ads", "Sound Design"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaEdit,
      title: "Content Strategy",
      description: "Strategic planning to ensure your content delivers maximum impact",
      features: ["Content Planning", "Audience Research", "SEO Strategy", "Performance Analysis"],
      color: "from-orange-500 to-amber-500"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep dive into your brand, audience, and content goals",
      icon: FaLightbulb
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized content roadmap aligned with your objectives",
      icon: FaCog
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Production of high-quality, engaging content across all formats",
      icon: FaPen
    },
    {
      step: "04",
      title: "Review & Revisions",
      description: "Collaborative feedback process to perfect every piece",
      icon: FaSync
    },
    {
      step: "05",
      title: "Optimization",
      description: "SEO and performance optimization for maximum reach",
      icon: FaMagic
    },
    {
      step: "06",
      title: "Distribution",
      description: "Strategic publishing and promotion across relevant channels",
      icon: FaLayerGroup
    },
  ];

  const results = [
    { metric: "3.2M", label: "Content Views", icon: FaEye, color: "from-orange-500 to-amber-500" },
    { metric: "450K", label: "Engagements", icon: FaHeart, color: "from-orange-500 to-amber-500" },
    { metric: "68%", label: "Faster Production", icon: FaClock, color: "from-orange-500 to-amber-500" },
    { metric: "95%", label: "Client Satisfaction", icon: FaAward, color: "from-orange-500 to-amber-500" },
  ];

  const contentTypes = [
    {
      category: "Written Content",
      items: ["Blog Articles", "Website Copy", "Social Media Posts", "Email Newsletters", "Whitepapers", "Case Studies", "Press Releases", "Product Descriptions"],
      icon: FaPen
    },
    {
      category: "Visual Content",
      items: ["Social Media Graphics", "Infographics", "Website Banners", "Presentation Decks", "E-book Designs", "Print Materials", "Brand Guidelines", "Icon Sets"],
      icon: FaPalette
    },
    {
      category: "Video & Audio",
      items: ["Explainer Videos", "Social Media Clips", "Product Demos", "Testimonial Videos", "Podcast Episodes", "Voiceovers", "Audio Ads", "Video Ads"],
      icon: FaVideo
    }
  ];

  const trustBadges = [
    {
      icon: FaShieldAlt,
      text: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all content deliverables"
    },
    {
      icon: FaStar,
      text: "Expert Creators",
      description: "Industry professionals with proven track records"
    },
    {
      icon: FaRocket,
      text: "Fast Turnaround",
      description: "Quick delivery without compromising on quality"
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
                  <FaPen className="text-5xl text-orange-400" />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Content Creation
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Transform your brand with compelling content that captivates audiences and drives results. 
                From stunning visuals to engaging copy, we bring your story to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                  Start Your Project
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                  View Portfolio
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

        {/* Services Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Our Content Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive content solutions tailored to your brand's unique voice and goals
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

        {/* Content Types Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Content We Create
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Diverse content formats to meet your audience wherever they are
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contentTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-orange-200"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <type.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {type.category}
                  </h3>
                  <div className="space-y-3">
                    {type.items.map((item, itemIndex) => (
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

        {/* Process Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Our Creative Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional content every time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-orange-400 bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">
                        {step.step}
                      </div>
                      <div className="text-orange-400">
                        <step.icon className="text-2xl" />
                      </div>
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
              Ready to Elevate Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's create content that resonates with your audience and drives real business results. 
              Your story deserves to be told beautifully.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center gap-3">
                Start Creating
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentCreationService;